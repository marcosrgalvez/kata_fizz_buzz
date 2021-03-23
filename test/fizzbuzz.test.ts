import { fizzBuzz } from '../src/fizzbuzz'

describe('Fizz Buzz', () => {
    it('If the number is not divisible by 3 niether by 5 returns the number', () => {
        expect(fizzBuzz(1)).toEqual(1)
        expect(fizzBuzz(2)).toEqual(2)
    })
    it('If the number is divisible by 3 returns Fizz', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
        expect(fizzBuzz(9)).toEqual('Fizz')
        expect(fizzBuzz(27)).toEqual('Fizz')
    })
    it('If the number is divisible by 5 returns Buzz', () => {
        expect(fizzBuzz(5)).toEqual('Buzz')
        expect(fizzBuzz(25)).toEqual('Buzz')
        expect(fizzBuzz(100)).toEqual('Buzz')
    })
    it('If the number is divisible by 5 and 3 returns FizzBuzz', () => {
        expect(fizzBuzz(15)).toEqual('FizzBuzz')
        expect(fizzBuzz(30)).toEqual('FizzBuzz')
        expect(fizzBuzz(90)).toEqual('FizzBuzz')
    })
})
