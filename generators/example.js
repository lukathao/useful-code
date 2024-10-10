// Generate Function generates an 
// infinite series of Natural Numbers 
function* nextNatural() {
  let naturalNumber = 1;

  // Infinite Generation
  while (true) {
    yield naturalNumber++;
  }
}

// Calling the Generate Function
let gen = nextNatural();

// Loop to print the first
// 10 Generated number
// for (let i = 0; i < 10; i++) {

//   // Generating Next Number
//   console.log(gen.next().value);
// }

const inorderTraversal = function* (arr) {
  for (const n of arr) {
    if (Array.isArray(n)) {
      yield* inorderTraversal(n);
    } else {
      yield n;
    }
  }
}

const gen2 = inorderTraversal([1, [2, 3, [4, 5, 6]], [7, 8]]);

while (true) {
  let value = gen2.next().value;
  if (value === undefined) {
    break;
  } else {
    console.log(value);
  }
}

