const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
path:path.resolve(__dirname,"../.env")
});
console.log('create table by sequelize');

const { Versionpoll } = require('../src/models');



async function createVersionpoll() {
  await Versionpoll.sync(); 
}

createVersionpoll();
