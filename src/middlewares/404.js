const middleware404 = (req, res) => {
    try {
        res.status(404).render("404");
        console.error()
    } catch (error) {
        res.status(500).send('Une erreur est survenue');
    }
};

module.exports = middleware404;