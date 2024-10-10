/**
* @return {Generator<number>}
*/

function* fibGenerator() {
  let n1 = 0, n2 = 1;

  while (true) {
    yield n1;
    [n1, n2] = [n2, n1 + n2]
  }
}

var fibGenerator2 = function* () {
  let n1 = 0, n2 = 1;
  while (true) {
    yield n1;
    [n1, n2] = [n2, n1 + n2];
  }
};

const fibGen = fibGenerator2();

console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);