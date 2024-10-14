function addNewFloor(original, newFloor) {
  // TODO: Implement the functionality to add a new floor with apartmens to the given 'apartment building'.
  original.push(newFloor);
  return original;
}

// Initializing a 2D array that represents an apartment building
let apartments = [
  ["Apt 101", "Apt 102"],
  ["Apt 201", "Apt 202"]
];

// Adding a new floor to the apartment building
apartments = addNewFloor(apartments, ["Apt 301", "Apt 302"]);

console.log(apartments);
// TODO: Make a walk visiting and printing each apartment on every floor of the updated building.
for (let i = 0; i < apartments.length; i++) {
  for (let j = 0; i < apartments[i].length; j++) {
    console.log(apartments[i][j]);
  }
}