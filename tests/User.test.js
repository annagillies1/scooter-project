const User = require("../src/User");

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(user.username).toBe("Joe Bloggs");
  });
  // test password
  test("password should be a string", () => {
    expect(user.password).toBe("test123");
  });

  // test age
  test("age should be a number", () => {
    expect(user.age).toBe(21);
  });

  // test login
  test("user can log in", () => {
    user.login("test123");
    expect(user.loggedIn).toBe(true);
  });

  // test logout
  test("user can log out", () => {
    user.logout();
    expect(user.loggedIn).toBe(false);
  });
});
