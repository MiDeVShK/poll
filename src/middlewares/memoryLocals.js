// Appel les Models Sequelize.
const {  Poll,  User,  Category,  Versionpoll} = require("../models");

//crée des const en Locals.
const loadToLocals = async (req, res, next) => {
  if (req.session) {

    //crée un session Guest pour utilisateur et l'envoie sur toutes les views.
    req.session.guest = true;
    const guest = req.session.guest;
    res.locals.guest = guest;

    //récupere les votes des utilisateur et les stocks et l'envoie sur toutes les views.
    req.session.vote = req.session.vote || [];
    const votes = req.session.vote;
    res.locals.votes = votes;

    //permet d'envoyé dans toutes les views l'userId sur toutes les views.
    res.locals.userId = req.session.userId;
    
    //permet d'envoyé dans toutes les views des Polls crée, leur author et leur catégories.
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

      //permet d'envoyé dans toutes les views des Category trier par leur noms.
      const category = await Category.findAll({
        order: ["name"]
      });
      res.locals.categories = category;
  
      //permet de compter tout les Polls et de les envoyé touts les views.
      const totalPoll = await Poll.count();
      res.locals.totalPoll = totalPoll;

      //permet de compter les result_a et result_b.
      const totalResultA = await Poll.sum("result_a");
      const totalResultB = await Poll.sum("result_b");

      //permet de compter le nombre total des deux et envoyer le résultat dans toutes les views.
      const totalVote = totalResultA + totalResultB;
      res.locals.totalVote = totalVote;

      //permet d'envoyer à toutes les views la version de l'app Poll.
      const version = await Versionpoll.findByPk(1); 
      res.locals.version = version;
      
      
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    } 
  }

  next();

};

module.exports = loadToLocals;