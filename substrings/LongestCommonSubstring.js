function maxCommStr(s1, s2) {
  let m = s1.length;
  let n = s2.length;

  let res = 0;

  // Consider every pair of index and find the length
  // of the longest common substring beginning with 
  // every pair. Finally return max of all maximums.
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let curr = 0;
      while ((i + curr) < m && (j + curr) < n &&
        s1[i + curr] === s2[j + curr]) {
        curr++;
      }
      res = Math.max(res, curr);
    }
  }
  console
  return res;
}

let s1 = "geeksforgeeks";
let s2 = "practicewritegeekscourses";
console.log(maxCommStr(s1, s2));

let string1 = "absdchj";
let string2 = "aisdklj";
console.log(`LCS is ${maxCommStr(string1, string2)}`);
string1 = "hometown";
string2 = "omkwn";
console.log(`LCS is ${maxCommStr(string1, string2)}`);