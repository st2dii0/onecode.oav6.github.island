const express = require("express");
const app = express();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('Blyat', 'IamGod', 'justK1dd1ng', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }, 

  // SQLite only
  storage: './sequelize-sqlite3.db',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const User = sequelize.define('users', {
    username: { type: Sequelize.STRING, allowNull: false },
    fullname: Sequelize.STRING, 
    password: { type: Sequelize.STRING, allowNull: false },
    email: Sequelize.STRING
  });


  sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    fullname: 'Janet Doenov',
    password: 'lovedogs',
    email: 'callme@janedoe.ca'  
  }))
  .then(jane => {
    console.log(jane.toJSON());
});

// User.findAll().then(user => {
//   console.log(user);
  
// });

app.listen(4242, () => {
    console.log("Listening on port 4242");
});
