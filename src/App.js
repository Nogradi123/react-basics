import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PokeListCard from './components/pokemon/PokeListCard'
import React, { useState } from 'react';

function App() {
	const [pokemon, setPokemon] = useState(() => [])


	const getApiData = async () => {
		const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=200&limit=200');
		console.log({ res: res.data, pokemon, state: React.state});

		return setPokemon(
			(prevState) => {
				// return [...prevState.pokemon, ...res.data]
				console.log({prevState, pokemon});
				return res.data.results;
			});
	};

	// const getApiData = () => {
	// 	const myData = axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
	// 		console.log({myData})
	// 	}).catch(err => console.log({err}))
	// }
console.log({pokemon, state: React.state})

	const displayPokemon = () => {
		return pokemon.map((poke, i )=> {
			return (<PokeListCard pokeBlah={poke} key={i} />)
		})
	}
  return (
    <div className="App">
      <h3>Click to get API data</h3>
	  <button onClick={() => getApiData()}>Click For Data</button>
	  <br/>
	  <br/>
	  <div className='pokemon__list-conatiner'>
	  	{displayPokemon()}
	  </div>
    </div>
  );
}

export default App;

