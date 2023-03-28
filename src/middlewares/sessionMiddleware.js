const session = require("express-session");
const { Client } = require("pg"); 

const client = new Client(process.env.PG_URL);
client.connect();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET, 
  resave: false, 
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === "prod", 
    expiration: 24 * 60 * 60 * 1000 //expire dans 24H
  }
});



module.exports = sessionMiddleware;
