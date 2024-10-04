// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor() {
    this.stations = {
      // creating random stations
      Glasgow: [], // empty arrays to be filled with scooters
      Edinburgh: [],
      Staffin: [],
    };

    this.registeredUsers = {}; // setting up an object to hold the registered users
  }

  // registering a new user
  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      // checking to see if the registered users array contains the username
      throw new Error(`username ${this.username} already in use`);
    } else if (age < 18) {
      throw new Error(`too young to register`);
    }
    const newUser = new User(username, password, age); // assigning the username, password, and age to the new user
    this.registeredUsers[username] = newUser; // logging it in the array
    console.log(`User ${username} has been registered`);
    return newUser;
  }

  // log in an existing user
  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user) {
      // checking to see if the user is NOT in the array
      throw new Error(`Username or password is incorrect`);
    }
    user.login(password);
    console.log(`User ${username} logged in`);
  }

  // log out an existing user
  logoutUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user) {
      // checking to see if the user is NOT in the array
      throw new Error(`This user is not logged in`);
    }
    user.login(password);
    console.log(`User ${username} logged out`);
  }

  // creating a new scooter and adding it to a station
  createScooter(station) {
    if (!this.stations[station]) {
      // checks to see if the station exists in the array
      throw new Error(`No such station (${station})`);
    }
    const newScooter = new Scooter(station); // creating a new scooter to add to the station
    this.stations[station].push(newScooter); // pushing the new scooter to the station array
    console.log(`Created a new scooter at the station: ${station}`);
    return newScooter; // returning the newScooter info
  }

  //Docking a scooter at a station
  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error(`Station does not exist`);
    }
    if (this.stations[station].includes(scooter)) {
      // checking to see if the scooter is already docked in the station
      throw new Error(`Scooter is already in the station`);
    }
    this.stations[station].push(scooter); // adding the scooter to the station in the stations array
    scooter.dock(station);
    console.log(`Scooter ${scooter} successfully docked at ${station}`);
  }

  //Finds the scooter in one of the stations, removes it, and calls the rent() method to assign the scooter to the user.
  rentScooter(scooter, user) {
    let stationFound = null;
    for (let station in this.stations) {
      if (this.stations[station].includes(scooter)) {
        stationFound = station;
        break;
      }
    }
    if (!stationFound) {
      throw new Error(`Scooter is already rented`);
    }

    // removing the scooter from the station and renting it
    this.stations[stationFound] = this.stations[stationFound].filter(
      (s) => s !== scooter
    );
    scooter.rent(user);
    console.log(`Scooter is rented by ${username}`);
  }

  // logs the list of registered users and the number of scooters in each station
  print() {
    console.log(`Registered Users:`);
    for (let username in this.registeredUsers) {
      console.log(`- ${username}`);
    }
    console.log("\nStations and their scooters:");
    for (let station in this.stations) {
      console.log(`${station}: ${this.stations[station].length} scooters`);
    }
  }
}

module.exports = ScooterApp;
