function foo() {
  return 'hello foo';
}

function bar() {
  return 'hello bar';
}

const out = [foo(), bar()].join(', ')
console.log(out);