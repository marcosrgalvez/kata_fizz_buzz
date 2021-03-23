export const fizzBuzz = (number:number) => {
    if (divisibleByThree(number)){
        return 'Fizz'
    } else if (number % 5 === 0){
        return 'Buzz'
    } else return number
}

let divisibleByThree = function(number:number) : boolean{
    return number % 3 === 0
}

