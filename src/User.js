class User {
  #password; // making the password field private

  constructor(username, password, age, loggedIn) {
    this.username = username;
    this.#password = password;
    this.age = age;
    // a user is NOT automatically logged in when registering
    this.loggedIn = false;
  }
  // method to log the user in
  login(password) {
    if (password === this.#password) {
      this.loggedIn = true; // setting the logged in to true
      console.log(`User ${this.username} logged in successfully.`);
    } else {
      throw new Error("incorrect password");
    }
  }

  // method to log out the user
  logout() {
    if (this.loggedIn) {
      this.loggedIn = false; // setting the user to logged out
      console.log(`User ${this.username} logged out successfully.`);
    } else {
      console.log(`User ${this.username} is already logged out.`);
    }
  }
}

module.exports = User;


