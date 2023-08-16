import React, { useState } from 'react';

const Character = ({ character, planet }) => {
  const [showPlanet, setShowPlanet] = useState(false);

  const togglePlanet = () => {
    setShowPlanet(prevShowPlanet => !prevShowPlanet);
  };

  

  return (
    <div className="character-card" onClick={togglePlanet}>
      <div className="character-name">{character.name}</div>
      {showPlanet && (
        <div className="character-planet">
          {planet ? `Homeworld: ${planet.name}` : 'Planet information not available'}
        </div>
      )}
    </div>
  );
};

export default Character;
