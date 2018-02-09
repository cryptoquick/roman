// TS FP Roman Number Conversion
import compose from '@typed/compose'

// Types
type ResultTuple = [string, number] // [quotient, remainder]

// Methods

// Get Integer Quotient
export const intquo = (dividend: number, divisor: number): number =>
  dividend - dividend % divisor

// Roman Conditionals
const lt = (divisor: number) => ([q, r]: ResultTuple): ResultTuple =>
  r < divisor ? [q + 'I', intquo(r, divisor)] : [q, r]

// Roman Number Conversion
export const convert = (input: number): string => {
  const [quotient, remainder] = lt(5)(['', input])
  return quotient
}
