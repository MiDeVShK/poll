const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
path:path.resolve(__dirname,"../.env")
});
console.log('Insertation en BDD');

const { Versionpoll } = require('../src/models');

async function populateTables(){
  await Versionpoll.bulkCreate([
    {name:"1.05"}
  ])};


  populateTables()