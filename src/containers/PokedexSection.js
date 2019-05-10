import React, { Component } from 'react';
import SectionHeader from '../components/SectionHeader';
import SeenItem from '../components/SeenItem';
import withPokedexContext from '../context/PokedexConsumer';

/*
1. Same implementation as DropdownSection.
However, we had to change our function component to a class component because
leading decorators must be attached to a class decoration (this is the error
the compiler gives us if we tried to use it with the function component).

Decorators (in general) can not be applied to variables, 
only to classes and properties. 
https://stackoverflow.com/questions/40721277/mobx-leading-decorators-must-be-attached-to-a-class-declaration
*/
@withPokedexContext
class PokedexSection extends Component {
  render() {
    const { pokedexContext } = this.props;

    return (
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
    )
  }
}

export default PokedexSection;