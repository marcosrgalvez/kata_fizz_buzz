import { and, contains, isDivisibleBy, or, otherwise } from './predicate';
import { Rule } from './rule';

export const createFizzBuzz = () => {
    const ruleSet: Rule[] = [
        {predicate: and(isDivisibleBy(3), isDivisibleBy(5)), trans: () => 'FizzBuzz'},
        {predicate: or(isDivisibleBy(3), contains(3)), trans: () => 'Fizz'},
        {predicate: or(isDivisibleBy(5), contains(5)), trans: () => 'Buzz'},
        {predicate: otherwise, trans: n => n.toString()},
    ];

    return fizzBuzz(ruleSet);
};

export const fizzBuzz = (ruleSet: Rule[]) => () =>
    Array.from({length: 100}, (_, i) => i + 1).map(n => ruleSet.find(rule => rule.predicate(n))!.trans(n));
