import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function Pokemon(props) {
  return (
    <li>
      {props.value}
    </li>
  );
}

function Pokemans(props) {
  const pokemonList = pokedex.map(pokemon => {
    return (
      <Pokemon key={pokemon.number} value={pokemon.name}/>
    );
  });
  return (
    <ul>
      {pokemonList}
    </ul>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Pokemans />);
