const express = require('express');
const morgan = require('morgan');
const pokemonRoutes = require('./pokemon-manager/routes/pokemonRoutes');

const app = express();
const port = 3000;

//middleware
app.use(express.json()); // For at kunne parse JSON-body data
app.use(morgan('dev')); //logger

//routes
app.use('/pokemon', pokemonRoutes);

//fejlhåndtering af ukendte ruter
app.use((req,res,next) => {
    res.status(404).json('Ruten blev ikke fundet');
})

app.listen(port, () => {
    console.log(`serveren kører på http://localhost:${port}`);
})