//count the characters as well
function removeDuplicates(yourString) {
  let stringCounter = {};
  let newString = []
  for (let i = 0; i < yourString.length; i++) {
    if (stringCounter[yourString[i]]) {
      stringCounter[yourString[i]]++;
    } else {
      stringCounter[yourString[i]] = 1;
      newString.push(yourString[i]);
    }
  }
  console.log(stringCounter);
  return newString.join("");
}

//convert to set and join
function removeDuplicatesWithSet(yourString) {
  return [...new Set(yourString)].join("");
}

function runCode() {
  let yourString = "asldkjasdflkj";
  console.log(yourString);
  console.log("Original string length " + yourString.length);
  const string1 = removeDuplicates(yourString);
  const string2 = removeDuplicatesWithSet(yourString);
  console.log("string 1");
  console.log(string1);
  console.log("string 2");
  console.log(string2);
}

runCode();