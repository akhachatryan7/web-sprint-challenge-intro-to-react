import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    
    axios.get(urlPeople)
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.log('Error fetching characters:', error);
      });

    axios.get(urlPlanets)
      .then(response => {
        setPlanets(response.data);
      })
      .catch(error => {
        console.log('Error fetching planets:', error);
      });
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {characters.map(character => {
        const characterPlanet = planets.find(planet => planet.id === character.homeworld);

        return (
          <Character key={character.id} character={character} planet={characterPlanet} />
        );
      })}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
