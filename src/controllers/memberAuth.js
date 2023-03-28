const {
  User,
  Poll
} = require('../models');
const Sequelize = require('sequelize')


const memberAuth = {
  async memberPage(req, res) {
    try {
      const memberId = Number(req.params.id);
      const member = await User.findByPk(memberId, {
        include: "poll"
      });
      const createdPoll = await member.countPoll();

      const resultsA = await Poll.findAll({
        where: {
          user_id: memberId
        },
        attributes: ["result_a"]
      });

      const resultsB = await Poll.findAll({
        where: {
          user_id: memberId
        },
        attributes: ["result_b"]
      })

      const result = [...resultsA.map(result => result.result_a), ...resultsB.map(result => result.result_b)];
      const answers = result.reduce((acc, curr) => acc + curr, 0);

      res.render('profil', {
        member,
        createdPoll,
        answers
      });
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  },

  async deletePollMember(req, res) {
    try {
      const id = req.body.poll_id;
      const userId = req.body.userPoll_id;

      const destroy = await Poll.destroy({
        where: {
          id: id
        }
      });

      res.redirect(`/member/${userId}`);
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }

  }



}

module.exports = memberAuth;