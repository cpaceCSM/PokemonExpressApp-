const React = require('react');

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon
    return (
      <div>
        <h1> Gotta Catch 'Em All! </h1>
        {pokemon.name} CAUGHT!
        <img src={pokemon.img}/>
        <br></br>
        <a href={'/pokemon'}>Go Back</a>
      </div>
    )
  }
}


module.exports = Show;
