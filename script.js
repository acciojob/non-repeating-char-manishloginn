function firstNonRepeatedChar(str) {
  const charCount = new Map();
 
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
 
  for (const [char, count] of charCount) {
    if (count === 1) {
      return char;
    }
  }
 
  return null;
}
 
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));