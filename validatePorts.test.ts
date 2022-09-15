const {default: TestRunner } = require("jest-runner");
import { validatePorts } from './validatePorts'


test('pass given single port (10)', () =>  {
    expect(validatePorts('10')).toBeTruthy();
})

test('pass given "any" input (any)', () =>  {
    expect(validatePorts('any')).toBeTruthy();
})

test('pass given multiple ports (1010 20)', () =>  {
    expect(validatePorts('1010 20')).toBeTruthy();
})

test('pass given port range (1010-2020)', () =>  {
    expect(validatePorts('1010-2020')).toBeTruthy();
})

test('pass given port range and single port (1010-2020 20)', () =>  {
    expect(validatePorts('1010-2020 20')).toBeTruthy();
})

test('pass given mixed valid ports and ranges (1010-2020 20 3030-4040 50)', () =>  {
    expect(validatePorts('1010-2020 20 3030-4040 50')).toBeTruthy();
})

test('fail given port value followed by "-" (1010-)', () =>  {
    expect(validatePorts('1010-')).toBeFalsy();
})

test('fail given port value and range followed by "-" (1010-2020 20-)', () =>  {
    expect(validatePorts('1010-2020 20-')).toBeFalsy();
})

test('fail given port value preceded by "-" (-10)', () =>  {
    expect(validatePorts('-10')).toBeFalsy();
})

test('fail given port value preceded by "- " (- 10)', () =>  {
    expect(validatePorts('- 10')).toBeFalsy();
})

test('fail given text other than "any" (test text)', () =>  {
    expect(validatePorts('test text')).toBeFalsy();
})

test('fail given "anything" text (anything)', () =>  {
    expect(validatePorts('anything')).toBeFalsy();
})

test('fail given "any" text and valid port (any 1010)', () =>  {
    expect(validatePorts('any 1010')).toBeFalsy();
})

test('fail given invalid port number - out of lower range (0)', () =>  {
    expect(validatePorts('0')).toBeFalsy();
})

test('fail given invalid port number - out of upper range (65536)', () =>  {
    expect(validatePorts('0')).toBeFalsy();
})

test('fail given negative number (-1)', () =>  {
    expect(validatePorts('-1')).toBeFalsy();
})

test('fail given invalid port range - range start higher than range end (40-20)', () =>  {
    expect(validatePorts('40-20')).toBeFalsy();
})