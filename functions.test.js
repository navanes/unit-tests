const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());
//
// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");

const nameCheck = () => console.log("checking Name ...");
describe("Checking names", () => {
  beforeEach(() => nameCheck());
  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });
  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
  test("User is Pam", () => {
    const user = "Pam";
    expect(user).toBe("Pam");
  });
});

//toBe
test("Adds 2 + 2 to equal to 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
//not.toBe()
test("Add 2 + 2 NOT eaqual to 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
//toBeNull()
test("Should be Null", () => {
  expect(functions.isNull()).toBeNull();
});
//toBeFalsy()
test("The value should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
//toBeTruthy()
test("The value should be truthy", () => {
  expect(functions.checkValue("black")).toBeTruthy();
});
//toBe is not going to work on arrays and objects instead we have to use toEqual
//toEqual
test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});
//Lees than or greater than or equal
//toBeLessThan, toBeLessThanOrEqual, toBeGreaterThan, toBeGreaterThanOrEqual
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});
test("should be greater than 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeGreaterThanOrEqual(1600);
});

//Regex => toMatch
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//Arrays => toContain
test("Admin should be in userNames", () => {
  expect(functions.userNames).toContain("admin");
});

//Working with async data

//Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

//Async Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});

// CHECK FOR THE TRUTHY AND FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
