const express = require ('express');

const app = express();
const pokemon = require('./models/pokemon.js')
const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})
//Index route
app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemon: pokemon })
    
})
//Show route
app.get('/pokemon/:indexOfPokemon', (req, res) => {
  res.render('Show', {pokemon:pokemon[req.params.indexOfPokemon]})
 
})

app.listen(port, () => {
    console.log("Listening on Port", port)
})