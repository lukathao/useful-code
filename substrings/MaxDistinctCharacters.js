function kDistinct(str, k) {
  let left = 0;
  let maxLen = 0;
  let hm = {};
  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];
    if (!(rightChar in hm)) {
      hm[rightChar] = 0;
    }
    hm[rightChar] += 1;
    while (Object.keys(hm).length > k) {
      const leftChar = str[left];
      hm[leftChar] -= 1;
      if (hm[leftChar] === 0) {
        delete hm[leftChar];
      }
      left += 1;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

console.log("longest substring is " + kDistinct("mkmmap", 2));
console.log("longest substring is " + kDistinct("mkmmap", 1));
console.log("longest substring is " + kDistinct("kaataz", 3));
