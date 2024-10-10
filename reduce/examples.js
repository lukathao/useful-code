const numberList = [111, 21, 35, 419, 5];

function findGreatest(list) {
  const greatest = list.reduce((greater, currentValue) => {
    if (greater >= currentValue) {
      return greater;
    } else {
      return currentValue;
    }
  }, list[0]);
  return greatest;
}

function findSmallest(list) {
  const smallest = list.reduce((smaller, currentValue) => {
    if (smaller <= currentValue) {
      return smaller;
    } else {
      return currentValue;
    }
  }, list[0]);
  return smallest;
}

function totalList(list) {
  const total = list.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
  return total;
}

const greatestNumber = findGreatest(numberList);
const smallestNumber = findSmallest(numberList);
const total = totalList(numberList);

console.log(greatestNumber);
console.log(smallestNumber);
console.log(total);
