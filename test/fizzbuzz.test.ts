import { fizzBuzz } from '../src/fizzbuzz'

describe('Fizz Buzz', () => {
    it('If the number is not divisible by 3 and is not 5 returns the number', () => {
        expect(fizzBuzz(1)).toEqual(1)
        expect(fizzBuzz(2)).toEqual(2)
    })
    it('If the number is divisible by 3 returns Fizz', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
        expect(fizzBuzz(9)).toEqual('Fizz')
        expect(fizzBuzz(27)).toEqual('Fizz')
    })
    it('If the number is 5 returns Buzz', () => {
        expect(fizzBuzz(5)).toEqual('Buzz')
    })
})
