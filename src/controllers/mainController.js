const {
  Poll
} = require('../models');

const mainController = {

  // méthode pour la page d'accueil
  async homePage(req, res) {

    try {
      req.session.guest = true;
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
        ]
      });

      res.render("index", {
        polls
      });
      //console.log(req.session);
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  },

  async addVote(req, res) {
    try {

      const choice = req.body.choice;
      const pollId = Number(req.body.id);

      if (!choice) {
        res.render('index', {
          errorMessage: "Please make a choice on the poll before submitting it",
          pollId
        });
        return;
      } else {
        await Poll.increment(choice, {
          where: {
            id: pollId
          }
        });
        await Poll.increment("resultTotal", {
          where: {
            id: pollId
          }
        });
        res.locals.votes.push(pollId);
        res.redirect('/');
      }
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  },

  async pollPage(req, res) {
    try {
      res.render('poll');
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  }
};

module.exports = mainController;