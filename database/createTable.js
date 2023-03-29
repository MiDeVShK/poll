const dotenv = require("dotenv");
const path = require("path");

<<<<<<< HEAD
dotenv.config({
path:path.resolve(__dirname,"../.env")
});
console.log(process.env.DB_PASSWORD);
=======

dotenv.config({
  path:path.resolve(__dirname,"../.env")
});
>>>>>>> refs/remotes/origin/main

const { User, Poll, Category } = require('../src/models');



async function createTables() {
  await Category.sync();
  await User.sync();
  await Poll.sync();
 
}


createTables();


