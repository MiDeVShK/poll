const session = require("express-session");
const pgSession = require('connect-pg-simple')(session);
const {
  Client
} = require("pg");

const client = new Client(process.env.PG_URL);

let sessionMiddleware;

try {
  client.connect();
  sessionMiddleware = session({
    store: new pgSession({
      pool: client,
      tableName: 'user_session',
      createTableIfMissing: true
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "prod",
      expiration: 24 * 60 * 60 * 1000 //expire dans 24H
    }
  });
} catch (error) {
  console.error("Erreur lors de la connexion à la base de données:", error);
}

module.exports = sessionMiddleware;