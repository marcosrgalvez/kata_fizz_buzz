export const fizzBuzz = (number:number) => {
    if (divisibleByThreeAndFive(number)){
        return 'FizzBuzz'
    }else if (divisibleByThree(number)){
        return 'Fizz'
    } else if (divisibleByFive(number)){
        return 'Buzz'
    } else return number
}

let isDivisibleBy = (divisor: number) => (number:number) => number % divisor === 0
let divisibleByThree = isDivisibleBy(3)
let divisibleByFive = isDivisibleBy(5)
let divisibleByThreeAndFive = (number: number) : boolean => divisibleByThree(number) && divisibleByFive(number)


