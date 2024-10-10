function countPalindromes(palindromesObject, left, right) {
  let count = 0;
  let pal = "";
  let yourString = palindromesObject["yourString"];
  while (left >= 0 && right < yourString.length && yourString[left] == yourString[right]) {
    count++;
    left--;
    right++;
    if (yourString[left] != undefined && yourString[right] != undefined) {
      if (!pal && left == right) {
        //right and left are equal so only set one
        pal = yourString[left];
      } else if (!pal && left != right) {
        pal = yourString[left] + yourString[right];
      } else {
        pal = yourString[left] + pal + yourString[right];
      }
      palindromesObject["palindromes"] = trackPalindromes(palindromesObject["palindromes"], pal)
    }

  }
  return count;
}

function trackPalindromes(palindromes, pal) {
  if (palindromes[pal]) {
    palindromes[pal]++;
  } else {
    palindromes[pal] = 1;
  }
  return palindromes;
}

function findPalindromes(palindromesObject) {
  let count = 0;
  for (let i = 0; i < palindromesObject["yourString"].length; i++) {
    count += countPalindromes(palindromesObject, i, i);
    count += countPalindromes(palindromesObject, i, i + 1);
  }
  palindromesObject["count"] = count;
  return palindromesObject;
}

function main() {
  let yourString = "aabbbaa";
  let palindromesObject = {
    yourString: yourString,
    palindromes: {},
  };
  let count = findPalindromes(palindromesObject);
  console.log(palindromesObject);
}

main();