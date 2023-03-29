const dotenv = require("dotenv");
const path = require("path");


dotenv.config({
  path:path.resolve(__dirname,"../.env")
});

const { User, Poll, Category } = require('../src/models');



async function createTables() {
  await Category.sync();
  await User.sync();
  await Poll.sync();
 
}


createTables();


