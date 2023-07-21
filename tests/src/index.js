const notBeingUseful = require('./library');
const { isPrime } = require('./prime');
const unnecessarilyLongFizzBuzz = require('./fizzbuzz');
const { bubbleSort } = require('./sort');

function foo() {
  return 'hello foo';
}

function bar() {
  return 'hello bar';
}

const out = [foo(), bar(), notBeingUseful(), isPrime(2)].join(', ')
console.log(out, bubbleSort(out));
unnecessarilyLongFizzBuzz();