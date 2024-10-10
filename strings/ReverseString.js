//iterate backwards
function reverseString(yourString) {
  let newString = [];
  for (let i = yourString.length - 1; i >= 0; i--) {
    newString.push(yourString[i]);
  }
  return newString.join("");
}

function reverseWithHighLevel(yourString) {
  return yourString.split('').reverse().join('');
}

function main() {
  const yourString = "Hi, my name is Yee";
  const newString1 = reverseString(yourString);
  const newString2 = reverseWithHighLevel(yourString);
  console.log("newString1");
  console.log(newString1);
  console.log("newString2");
  console.log(newString2);
}

main();