const bcrypt = require('bcrypt');
const validator = require("email-validator");
const {
  User,
  Poll
} = require("../models");
 

const userAuthController = {
  async handleSignUpForm(req, res) {

    try {
      //on réupere les donnés du signup du form
      const {
        pseudo,
        //firstname,
        //lastname,
        //email,
        password,
        confirmation
      } = req.body;


      //1-On vérifie qu'aucun champ est remplis et non vide
      if (!pseudo || !password || !confirmation) {  //  || !firstname || !lastname || !email ||
        res.render("index", {
          errorMessage: "Please fill all the fields before submitting"
        });
        return;
      }

      //2- on vérifie que le password et la confirmation matchent
      if (password !== confirmation) {
        res.render("index", {
          errorMessage: "Passwords don't match"
        });
        return;
      }

      //3 on vérifie que le password est plus long que 8 characters
      if (password.length < 8) {
        res.render("index", {
          errorMessage: "Please enter a password with at least 8 characters"
        });
        return;
      }

      //4 on vérifie que l'email est "valide grâce à email-validator"
      /* if (!validator.validate(email)) {
        res.render("index", {
          errorMessage: "Please enter a valid email adress"
        });
        return;
      } */

      //5 on vérifie que l'email n'est pas déjà pris 
      /* const alreadyExistingEmail = await User.findOne({
        where: {
          email: email
        }
      });
      if (alreadyExistingEmail) {
        res.render("index", {
          errorMessage: "This email is already taken"
        });
        return;
      } */

      //6 on vérifie que le pseuo n'est pas déjà pris 
      const alreadyExistingPseudo = await User.findOne({
        where: {
          pseudo: pseudo
        }
      });
      if (alreadyExistingPseudo) {
        res.render("index", {
          errorMessage: "This pseudo is already taken"
        });
        return;
      }

      // ===== INSERTION DU USER ====
      // ON hash le password

      const saltRounds = parseInt(process.env.SALT_ROUNDS)
      const hashedPassword = await bcrypt.hash(password, saltRounds)

      //2. Insertion dans la bdd

      await User.create({
          pseudo: pseudo,          
          password: hashedPassword
        }),
        //console.log(req.body)
        res.render("index", {
          succesMessage: "You are successfully registered. Please authenticate now."
        });
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  },

  async handleLoginForm(req, res) {
    try {
      const {
        pseudo,
        password
      } = req.body;

      if (!password || !pseudo) {
        res.render("index", {
          errorMessage: "Incorrect username or password " 
        });
        return;
      }   

      const user = await User.findOne({
        where: {
          pseudo
        },

      });
      if (user === null) {
        res.render("index", {
          errorMessage: "Incorrect password"
        });
        return;
      }

      const isMatching = await bcrypt.compare(password, user.password);


      if (!isMatching) {
        res.render("index", {
          errorMessage: "Incorrect password"
        });
        return;
      }
      req.session.userRole = user.role;
      req.session.userId = user.id;

      res.redirect("/");

    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  },

  async logoutAndRedirect(req, res) {
    try {
      // On veut retirer le userId de la session
      req.session.userId = null;
      req.session.userRole = null;
      res.redirect("/");
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  }
}


module.exports = userAuthController;