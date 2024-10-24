const pokemonModel = require('../models/pokemonModel');

//opret pokemon (create)
exports.createPokemon = (req, res) => {
    pokemonModel.create(req.body)
  res.status(201).send({message: 'Pokemon blev oprettet.', pokemon: newPokemon});
};

exports.getAllPokemon = (req, res) => {
    const allPokemon = pokemonModel.findAll();
    res.json(allPokemon);
};

exports.getPokemonById = (req, res) => {
    const pokemon = pokemonModel.findById(req.params.id);
    if (!pokemon) {
        res.status(404).json({error: 'Pokemon not found'});
    }
    res.json(pokemon);
}



exports.updatePokemon = (req, res) => {
    const updatedPokemon = pokemonModel.update(req.params.id, req.body)
    if (!updatedPokemon) {
        res.status(404).json({error: 'Pokemon not found'});
    }
    res.json({message: 'pokemon opdateret', pokemon: updatedPokemon});
}

exports.deletePokemon = (req, res) => {
    const deletedPokemon = pokemonModel.delete(req.params.id);
    if (!deletedPokemon) {
        res.status(404).json({error: 'Pokemon not found'});
    }
    res.json({message: 'Pokemon slettet', pokemon: deletedPokemon});
};