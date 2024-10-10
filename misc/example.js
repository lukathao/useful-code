// Shallow copy
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
// Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));

console.log(original);
console.log(shallowCopy);
console.log(deepCopy);