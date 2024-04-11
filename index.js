function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  return word === reversedWord;
}
function reverseString(str) {
  // Converting  the string to an array, reversing it and then joininig it back into a string
  return str.split('').reverse().join('');
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

 The REVERSE function is used to reverse the input word. 
 This function takes the input string and returns a new string with its characters in reverse order.

Comparison: The original word and the reversed word are compared using the equality operator (===). 
If the original word is the same as the reversed word, it means that the word reads the same forwards and backwards, 
indicating that it's a palindrome.

Return: The function returns true if the original word is equal to the reversed word, 
indicating that it's a palindrome. Otherwise, it returns false.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
