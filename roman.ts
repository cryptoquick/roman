'use strict'

// TS FP Roman Numeral Conversion
import * as _ from 'lodash/fp'
import tco from 'tco'

// Types
type ResultTuple = [string, number] // [quotient, remainder]

// Utility Methods
const compose = (...funcs: any[]): any => _.flowRight(funcs)

// Get Integer Quotient
export const intquo = (dividend: number, divisor: number): number =>
  dividend - dividend % divisor

// Core Methods

// Roman Conditionals
const lt = (divisor: number, numeral: string, min: number) => ([
  q,
  r,
]: ResultTuple): ResultTuple =>
  r <= divisor && r > min ? [numeral + q, intquo(r, divisor)] : [q, r]

const composedConditionals = compose(
  lt(50, 'X', 10),
  lt(10, 'V', 5),
  lt(5, 'I', 0)
  // TODO
)

// Roman Numeral Conversion w/TCO
type TCOResultTuple = [any, [ResultTuple]]

// let run: number = 0 // debug

const convertRoman = tco(
  ([quotient, remainder]: ResultTuple): TCOResultTuple => {
    // console.log(input)
    // const [quotient, remainder] = input
    // lt(50, 'X'), lt(10, 'V'), lt(5, 'I')
    const result: ResultTuple = composedConditionals([quotient, remainder])
    console.log('quotient:', quotient)
    console.log('remainder:', remainder)
    console.log('result:', result)
    // if (run === 7) { // debug
    //   process.exit()
    // } else {
    //   run++
    // }
    return remainder > 0
      ? [null, [result]]
      : [convertRoman, [[quotient, remainder - 1]]]
  }
)

// const optConvertRoman = () => tco(

export const convert = (input: number): string => {
  const [[quotient]] = convertRoman(['', input])
  return quotient
}
