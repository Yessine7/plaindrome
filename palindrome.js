function isPalindrome(input) {
  if (!input) {
    return "The input is empty";
  }
  const cleanedInput = input.toLowerCase().replace(/[^a-z]/g, "");
  const reversedInput = cleanedInput.split("").reverse().join("");

  if (cleanedInput === reversedInput) {
    return "The input is a palindrome";
  } else {
    return "The input is not a palindrome";
  }
}

module.exports = { isPalindrome };
