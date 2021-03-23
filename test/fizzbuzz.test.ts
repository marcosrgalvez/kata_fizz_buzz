import { fizzBuzz } from '../src/fizzbuzz'

describe('Fizz Buzz', () => {
    it('If the number is not 3 returns Fizz', () => {
        expect(fizzBuzz(1)).toEqual(1)
        expect(fizzBuzz(2)).toEqual(2)
    })
    it('If the number is 3 returns Fizz', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
    })
})
