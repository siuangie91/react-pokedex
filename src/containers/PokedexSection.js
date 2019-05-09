import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SeenItem from '../components/SeenItem';
import PokedexContext from '../context/PokedexContext';

const PokedexSection = () => (
  <section className="section pokedex-section">
    <SectionHeader>Here's what you've seen so far:</SectionHeader>
    {/*
    4a. Consume the context by wrapping the list in the Context Consumer.
    */}
    <PokedexContext.Consumer
      name="PokedexContextConsumer.PokedexSection">
      {
        value => (
          <ul className="seen-list">
            {
              /* 
              4b. Map over the provider's `seen` prop.
              */
              value.seen.map((mon, i) => (
                <SeenItem key={i} {...mon} />               
              ))
            }
          </ul>
        )
      }
    </PokedexContext.Consumer>
  </section>
);

export default PokedexSection;
