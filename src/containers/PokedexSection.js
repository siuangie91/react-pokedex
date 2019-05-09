import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SeenItem from '../components/SeenItem';
import withPokedexContext from '../context/PokedexConsumer';

/*
2. Same implementation as DropdownSection
*/
const PokedexSection = ({ pokedexContext }) => (
  <section className="section pokedex-section">
    <SectionHeader>Here's what you've seen so far:</SectionHeader>
    
    <ul className="seen-list">
      {
        pokedexContext.seen.map((mon, i) => (
          <SeenItem key={i} {...mon} />               
        ))
      }
    </ul>

  </section>
);

export default withPokedexContext(PokedexSection);