let pokemonList = [];
let currentId = 0;

exports.create = (pokemonData) =>{
    const newPokemon= {
        id: currentId++,
        ...pokemonData
    };
    pokemonList.push(newPokemon);
    return newPokemon;
}

exports.findAll = () => {
    return pokemonList;
}

exports.getPokemonById = (req, res) => {
    return pokemonList.find(pokemon => pokemon.id === req.params.id);
}

exports.update = (id, updatedData) => {
const pokemonIndex = pokemonList.findIndex(pokemon => pokemon.id === id);
if (pokemonIndex ===-1) return null;
pokemonList[pokemonIndex] = {id: Number(id), ...updatedData};
return pokemonList[pokemonIndex];
}

exports.delete = (id) => {
    const pokemonIndex = pokemonList.findIndex(pokemon => pokemon.id === id);
    if (pokemonIndex === -1) return false;
    pokemonList.splice(pokemonIndex, 1);
    return true
}