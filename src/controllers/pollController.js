const {
  Poll,
  Category
} = require("../models");



const pollController = {
  async createPoll(req, res) {
    try {
      const {
        tag_id,
        question,
        choice_a,
        choice_b,
        user_id
      } = req.body;

      if (!question || !choice_a || !choice_b) {
        res.render("index", {
          errorMessage: "Please fill all the fields before submitting"
        });
        return;
      }

      await Poll.create({
          tag_id: tag_id,
          question: question,
          choice_a: choice_a,
          choice_b: choice_b,
          user_id: user_id,
          result_a: 0,
          result_b: 0,
          resultTotal: 0,

        }),
        res.redirect("/");
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  },

  async getPollByCategories(req, res) {
    try {
      const categoryId = req.params.id;

      const categoryPolls = await Category.findByPk(categoryId, {

        include: [{
          model: Poll,
          as: "poll",

          include: [{
            association: "author",
            attributes: ["pseudo"]
          }]
        }],
        order: [
          ["poll", 'resultTotal', 'DESC']
        ]
      });

      res.render('pollCategory', {
        categoryPolls
      })
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  },

  async getPollByCategoriesPhone(req, res) {
    try {
      const categoryId = req.body.tag_id;

      const categoryPolls = await Category.findByPk(categoryId, {
        include: [{
          model: Poll,
          as: "poll",
          include: [{
            association: "author",
            attributes: ["pseudo"]
          }]
        }],
        order: [
          ["poll", 'resultTotal', 'DESC']
        ]
      });

      res.render('pollCategory', {
        categoryPolls
      })
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  }

};



module.exports = pollController;