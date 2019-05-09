import React from 'react';

const SeenItem = ({ id, name }) => (
  <li>
    <a href={`https://www.serebii.net/pokedex-gs/${id}.shtml`} target="_blank" rel="noopener noreferrer">
      <span>{id}. {name}</span>
      <img src={`https://www.serebii.net/pokearth/sprites/crystal/${id}.png`} alt={name}/>
    </a>
  </li>
);

export default SeenItem;