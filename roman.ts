// TS FP Roman Numeral Conversion
import * as _ from 'lodash/fp'

// Types
type ResultTuple = [string, number] // [quotient, remainder]

// Utility Methods
const compose = (...funcs: any[]): any => _.flowRight(funcs)

// Core Methods

// Get Integer Quotient
export const intquo = (dividend: number, divisor: number): number =>
  dividend - dividend % divisor

// Roman Conditionals
const lt = (divisor: number, numeral: string) => ([
  q,
  r,
]: ResultTuple): ResultTuple =>
  r < divisor ? [q + numeral, intquo(r, divisor)] : [q, r]

// Roman Numeral Conversion
const convertRoman = compose(lt(10, 'V'), lt(5, 'I'))

export const convert = (input: number): string => {
  const [quotient] = convertRoman(['', input])
  return quotient
}
