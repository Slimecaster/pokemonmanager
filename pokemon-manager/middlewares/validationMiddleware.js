exports.validatePokemon = (req, res, next) => {
    const {name, type, abilities} = req.body;
    if (!name || !type || !abilities) {
        return res.status(400).json({error: 'udfyld alle oplysninger'});
    }
    next();
}