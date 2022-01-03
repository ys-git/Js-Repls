//reversing a string

const myStr = "Hi There! You are really a nice person.";
const myStrArray = myStr.split("");
const reversedStr = [];
for(let i = myStrArray.length-1; i >= 0; i--)
{
  reversedStr.push(myStrArray[i]);
}

console.log("Original String :: " + myStr +  "  ||  Reversed String :: " + reversedStr.join(""));

//Time Complexity : O(n)
//Space Complexity : O(n)