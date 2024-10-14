function findMedian(arr: number[]): number {
  const sortedArr = arr.sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    // If array length is even, return the average of the two middle elements
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  } else {
    // If array length is odd, return the middle element
    return sortedArr[mid];
  }
}

