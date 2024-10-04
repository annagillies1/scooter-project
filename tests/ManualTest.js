const User = require('./User');
const Scooter = require('./Scooter');
const ScooterApp = require('./ScooterApp');

// creating an instance of the scooter app 
const app = new ScooterApp;

//creating a new user
const user1 = app.registeredUser('Anna_Gillies', 'password123', 29);
const user2 = app.registeredUser('Mark_Macdonald', 'password234', 28);

// logging in user 1 
user1.login('password123');