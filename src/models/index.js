const User = require("./User");
const Poll = require("./Poll");
const Category = require("./Category");
const Versionpoll = require("./Versionpoll");


User.hasMany(Poll, {
  foreignKey: "user_id",
  as: "poll"
});

Poll.belongsTo(User, {
  foreignKey: "user_id",
  as: "author"
});

Category.hasMany(Poll, {
  foreignKey: "tag_id",
  as: "poll"
});

Poll.belongsTo(Category, {
  foreignKey: "tag_id",
  as: "category"
});


module.exports = { User, Poll, Category, Versionpoll };
