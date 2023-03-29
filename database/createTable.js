const dotenv = require("dotenv");
dotenv.config();

const { User, Poll, Category } = require('../src/models');



async function createTables() {
  await Category.sync();
  await User.sync();
  await Poll.sync();
 
}


createTables();


