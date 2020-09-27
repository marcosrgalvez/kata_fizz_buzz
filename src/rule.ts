import { Predicate } from './predicate';

export interface Rule {
    predicate: Predicate
    trans: (n: number) => string
}
