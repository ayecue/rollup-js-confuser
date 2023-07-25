import notBeingUseful from './library';
import { isPrime } from './prime';
import unnecessarilyLongFizzBuzz from './fizzbuzz';
import { bubbleSort } from './sort';

export function foo(): string {
  return 'hello foo';
}

export function bar(): string {
  return 'hello bar';
}

const out = [foo(), bar(), notBeingUseful(), isPrime(2)].join(', ')
console.log(out, bubbleSort(out.split(', ')));
unnecessarilyLongFizzBuzz();

export {
  notBeingUseful,
  isPrime,
  unnecessarilyLongFizzBuzz,
  bubbleSort
};