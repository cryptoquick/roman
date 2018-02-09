// Roman Ava Tests
import test from 'ava'
import {convert, intquo} from './roman'

// Integer Division
test('IntDiv 1001', t => t.is(intquo(1001, 1000), 1000))

// Convert
test('Convert I', t => t.is(convert(1), 'I'))
test('Convert V', t => t.is(convert(5), 'V'))
test('Convert X', t => t.is(convert(10), 'X'))
test('Convert IX', t => t.is(convert(9), 'IX'))
// test('Convert MMMDCCCLXXXVIII', t => t.is(convert(3888), 'MMMDCCCLXXXVIII'))
// test('Convert MMMCMXCIX', t => t.is(convert(3999), 'MMMCMXCIX'))
