import {add} from '../utils/functions'

test('add returns sum of two numbers',()=> {
    expect(add(1,2)).toBe(3)
})

test('add handles string inputs that are numbers', () => {
    expect(add('3',4)).toBe(7)
}) 

test('add returns nan if non numbers are passed', () => {
    expect(add('hello','world')).toBeNaN()
})