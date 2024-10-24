const express = require('express');
const pokemonController = require('../controllers/pokemonController');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

//opret Pokemon (create)
router.post('/', validationMiddleware.validatePokemon, pokemonController.createPokemon);

//læs alle Pokemon (read)
router.get ('/', pokemonController.getAllPokemon);

//læs en Pokemon (read)
router.get('/:id',pokemonController.getPokemonById)

//opdater Pokemon (update)
router.put('/:id', validationMiddleware.validatePokemon, pokemonController.updatePokemon);

//slet Pokemon (delete)
router.delete('/:id',pokemonController.deletePokemon);

module.exports = router;