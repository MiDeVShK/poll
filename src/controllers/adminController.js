const {
  User,
  Poll,
  Versionpoll
} = require('../models');


const adminController = {
    async homeAdminPage(req, res) {
      try {
        const users = await User.findAll({
          attributes: ["pseudo", "id"]
        });

        res.render('dashboard', {
          users
        });
      } catch (error) {
        res.status(500).send('Une erreur est survenue');
      }
    },

    async changeRoleUser(req, res) {
      try {
        const role = req.body.selectRole;
        const id = req.body.selectUser
        const users = await User.findAll({
          attributes: ["pseudo", "id"]
        });
        const roleChange = await User.update({
          role: role
        }, {
          where: {
            id: id
          }
        });
        res.render('dashboard', {
          users,
          message1: "update sucess"
        });
      } catch (error) {
        res.status(500).send('Une erreur est survenue');
      }
    },


    async deletePoll(req, res) {
      try {
        const id = req.body.selectPoll;
        const users = await User.findAll({
          attributes: ["pseudo", "id"]
        });
        const result = await Poll.destroy({
          where: {
            id: id
          }
        });

        res.render('dashboard', {
          users,
          message2: "Delete Poll sucess"
        });
      } catch (error) {
        res.status(500).send('Une erreur est survenue');
      }
    },


    async modifPoll(req, res) {
      try {

        const id = req.body.selectPoll;
        const value = req.body.modif
        const modif = req.body.selectModif

        const users = await User.findAll({
          attributes: ["pseudo", "id"]
        })

        const updateObj = {};
        updateObj[modif] = value;

        const result = await Poll.update(
          updateObj, {
            where: {
              id: id
            }
          }
        );
        res.render('dashboard', {
          users,
          message3: "Modification Poll sucess"
        });
      } catch (error) {
        res.status(500).send('Une erreur est survenue');
      }
    },

    async versionPoll(req, res) {
      try {
        console.log(req.body);
         const idVersion = 1;
         const versionModif = req.body.version;          
                    
        const result = await Versionpoll.update({name:versionModif},{where: {id:idVersion}}
        ); 

        const users = await User.findAll({
          attributes: ["pseudo", "id"]
         });

        res.render('dashboard', {
          users,       
          message4: "Modification Version sucess"
        });
      } catch (error) {
        res.status(500).send('Une erreur est survenue');
      }
}
}

module.exports = adminController;