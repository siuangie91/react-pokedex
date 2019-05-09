import React from 'react';
import SectionHeader from '../components/SectionHeader';
import pokemon from '../data/pokemon';
import SeenItem from '../components/SeenItem';

class PokedexSection extends React.Component {
  render() {
    return (
      <section className="section pokedex-section">
        <SectionHeader>Here's what you've seen so far:</SectionHeader>
        <ul className="seen-list">
          {
            pokemon.map((mon, i) => (
              <SeenItem key={i} {...mon} />
            ))
          }
        </ul>
      </section>
    )
  }
}

export default PokedexSection;