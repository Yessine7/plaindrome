const { isPalindrome } = require("./palindrome");

test("Empty input", () => {
  expect(isPalindrome("")).toBe("The input is empty");
});

test("Palindrome input", () => {
  expect(isPalindrome("mom")).toBe("The input is a palindrome");
});

test("Non-palindrome input", () => {
  expect(isPalindrome("bill")).toBe("The input is not a palindrome");
});
