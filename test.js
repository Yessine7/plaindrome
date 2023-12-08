const { isPalindrome } = require("./palindrome");

test("Empty input", () => {
  expect(isPalindrome("")).toBe("The input is empty");
});

test("Palindrome input", () => {
  expect(isPalindrome("mom")).toBe("The input is a palindrome");
});
