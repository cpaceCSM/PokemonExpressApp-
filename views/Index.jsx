const React = require('react');

class Index extends React.Component {
  render() {
    const pokemon = this.props.pokemon
    return (
      <div>
        <h1> 'All The Pokemon!' </h1>

        {pokemon.map((pokemon, i) => {
          return (
            <ul>
              <li>
                <a href={`/pokemon/${i}`}>
                  {pokemon.name}</a>

                <img src={pokemon.img}></img>

              </li>
            </ul>
          )
        })}
      </div>
    )
  }
}

module.exports = Index;