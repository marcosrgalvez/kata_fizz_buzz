export const fizzBuzz = (aNumber:number) => {
    if (divisibleByThreeAndFive(aNumber)){
        return 'FizzBuzz'
    }else if (divisibleByThree(aNumber)){
        return 'Fizz'
    } else if (divisibleByFive(aNumber)){
        return 'Buzz'
    } else return aNumber
}

let isDivisibleBy = (divisor: number) => (aNumber:number) => aNumber % divisor === 0
let divisibleByThree = isDivisibleBy(3)
let divisibleByFive = isDivisibleBy(5)
let divisibleByThreeAndFive = (aNumber: number) : boolean => divisibleByThree(aNumber) && divisibleByFive(aNumber)


