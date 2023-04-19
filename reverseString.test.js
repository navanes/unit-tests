const reverseString = require("./reverseString");
//to see if the function defined
test("ReverseString function exist", () => {
  expect(reverseString).toBeDefined();
});

test("String reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String reverse with upperCase", () => {
  expect(reverseString("hEllo")).toEqual("olleh");
});
