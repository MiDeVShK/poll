const {
  Poll,
  User,
  Category
} = require("../models");

const loadToLocals = async (req, res, next) => {
  if (req.session) {

    req.session.guest = true;
    const guest = req.session.guest;
    res.locals.guest = guest;

    req.session.vote = req.session.vote || [];
    const votes = req.session.vote;
    res.locals.votes = votes;

    res.locals.userId = req.session.userId;
    try {
      const polls = await Poll.findAll({
        order: [
          ["resultTotal", "DESC"]
        ],
        include: [{
            association: "author",
            attributes: ["pseudo"]
          },
          {
            association: "category",
            attributes: ["name"]
          }
        ],
      });
      res.locals.polls = polls;

      const category = await Category.findAll({
        order: ["name"]
      });
      res.locals.categories = category;

      const totalPoll = await Poll.count();
      res.locals.totalPoll = totalPoll;

      const totalResultA = await Poll.sum("result_a");
      const totalResultB = await Poll.sum("result_b");
      const totalVote = totalResultA + totalResultB;
      res.locals.totalVote = totalVote;
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
    

  }

  next();

};

module.exports = loadToLocals;