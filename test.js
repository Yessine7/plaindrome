const { isPalindrome } = require("./palindrome");

test("Empty input", () => {
  expect(isPalindrome("")).toBe("The input is empty");
});
