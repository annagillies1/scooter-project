class Scooter {
  // a static number which starts at 1 and increments each time a new serial number is assigned
  static nextSerial = 1;

  constructor(station, charge = 100, isBroken = false) {
    // the station the scooter is located at, or null if checked out
    this.station = station;
    // the User who checked out the Scooter, or null if docked
    this.user = null;
    // a number assigned sequentially from nextSerial
    this.serial = Scooter.nextSerial++;
    // a number from 0 (no charge at all) to 100 (fully charged) - all scooters start at 100
    this.charge = charge;
    // boolean - setting it to false as scooters start in good repair
    this.isBroken = isBroken;
  }

  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      this.user = user; // assigning a new user
      this.station = null; // removing it from the station
      console.log(`scooter rented by ${user}.`);
    } else if (this.charge <= 20) {
      // if the charge is below 20%, error
      throw new Error("scooter needs to charge");
    } else if (this.isBroken) {
      // if the scooter is broken, error
      throw new Error("scooter needs to be repaired");
    }
  }

  dock(station) {
    if (this.user !== null) {
      // if there is an attached user, assuming it's in use
      this.user = null; // clearing the user
      this.station = station; // setting the station to the new station
      console.log(`Thank you for returning the scooter to ${station}`);
    } else {
      console.log("The scooter has already been docked");
    }
  }
}

module.exports = Scooter;
