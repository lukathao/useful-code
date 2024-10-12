let str = 'lelxe';
let count = 0;
let hm = {};
let permutation = (str, result) => {
  if (str.length === 0) {
    count++;
    if (!hm[result]) {
      hm[result] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    let rest = str.substring(0, i) + str.substring(i + 1);
    permutation(rest, result + str[i]);
  }
}
permutation(str, '');
console.log(count);
console.log(hm);
console.log(Object.keys(hm).length);