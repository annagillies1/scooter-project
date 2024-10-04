const Scooter = require("../src/Scooter");

describe("Scooter class tests", () => {
  let scooter;
  let user;

  beforeEach(() => {
    // Initialise scooter and user before each test
    scooter = new Scooter("Edinburgh", 100, false); // Correct Scooter instance
    user = "John Doe"; // User for renting
  });

  // Test if the Scooter instance is created correctly
  test("Scooter class should create Scooter instance", () => {
    expect(scooter).toBeInstanceOf(Scooter);
  });

  // Test the rent method
  test("should be able to rent scooter", () => {
    const consoleSpy = jest.spyOn(console, "log"); // Spy on console.log
    // Call the rent method with a user
    scooter.rent(user);
    // Expect console.log to have been called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith(`scooter rented by ${user}.`);
    consoleSpy.mockRestore(); // Restore the original console.log behavior
  });


  // Test the dock method
  test("should be able to dock scooter", () => {
    const consoleSpy = jest.spyOn(console, "log"); // Spy on console.log
    const station = "Edinburgh"
    scooter.user = "John Doe"
    // Call the rent method with a user
    scooter.dock(station);
    // Expect console.log to have been called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith(`Thank you for returning the scooter to ${station}`);
    consoleSpy.mockRestore(); // Restore the original console.log behavior
  })

});

