const {
    User
} = require("../models");

const authentifyRequestMiddleware = async (req, res, next) => {
    try {
        if (req.session.userId) {
            const userId = +req.session.userId;
            const user = await User.findByPk(userId);
            req.user = user;
            res.locals.user = user;
        }
    } catch (error) {
        res.status(500).send('Une erreur est survenue');
    }

    next();
}





module.exports = authentifyRequestMiddleware;
