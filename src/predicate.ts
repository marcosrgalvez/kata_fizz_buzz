
export const isDivisibleBy = (divisor: number) => (n: number) => n % divisor === 0;
export const contains = (search: number) => (n: number) => n.toString().search(search.toString()) === 0;
export const and = (...predicates: Predicate[]) => (n: number) => predicates.every(predicate => predicate(n));
export const or = (...predicates: Predicate[]) => (n: number) => predicates.some(predicate => predicate(n));
export const otherwise = () => true;

export type Predicate = (n: number) => boolean
