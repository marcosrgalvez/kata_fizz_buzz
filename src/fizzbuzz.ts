export const fizzBuzz = (number:number) => {
    if (number % 3 === 0){
        return 'Fizz'
    } else if (number === 5){
        return 'Buzz'
    } else return number
}

