export const fizzBuzz = (number:number) => {
    if (divisibleByThree(number)){
        return 'Fizz'
    } else if (divisibleByFive(number)){
        return 'Buzz'
    } else return number
}

let divisibleByThree = function(number:number) : boolean{
    return number % 3 === 0
}

let divisibleByFive = function(number:number) : boolean{
    return number % 5 === 0
}

