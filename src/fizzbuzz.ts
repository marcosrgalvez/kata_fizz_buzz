export const fizzBuzz = (aNumber: number, numbers?: number[]) => {
    if (numbers === undefined) {
        return fizzBuzzForNumber(aNumber);
    } else {
        return numbers.map(n => fizzBuzzForNumber(n));
    }
};

const fizzBuzzForNumber = (aNumber: number) => {
    if (isDivisibleBy3(aNumber) && isDivisibleBy5(aNumber)) {
        return 'FizzBuzz';
    }
    if (isDivisibleBy3(aNumber)) {
        return 'Fizz';
    }
    if (isDivisibleBy5(aNumber)) {
        return 'Buzz';
    }

    return aNumber.toString();
};

const isDivisibleBy = (divisor: number) => (n: number) => n % divisor === 0;
const isDivisibleBy3 = isDivisibleBy(3);
const isDivisibleBy5 = isDivisibleBy(5);
