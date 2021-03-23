import { fizzBuzz } from '../src/fizzbuzz'

describe('Always returns the number given', () => {
    it('example test', () => {
        expect(fizzBuzz(1)).toEqual(1)
        expect(fizzBuzz(2)).toEqual(2)
    })
})
