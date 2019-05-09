import React from 'react';
import SectionHeader from '../components/SectionHeader';
import PokedexContext from '../context/PokedexContext';

class DropdownSection extends React.Component {
  render() {
    return (
      <section className="section dropdown-section">
        <SectionHeader>What Pokémon did you see?</SectionHeader>
        <section className="form-container">
          {/*
          3a. Consume the context by wrapping the dropdown in the Context Consumer.    
          */}
          <PokedexContext.Consumer
            name="PokedexContextConsumer.DropdownSection">
            {
              /*
              3b. Render the dropdown in a function with takes the provider's `value` prop as an argument.
              This allows us to access `unseen`, `seen`, and `addToSeen`.
              */
              value => (
                <select>
                  {
                    value.unseen.map((mon, i) => (
                      <option key={i} value={mon.id}>{mon.id}. {mon.name}</option>
                    ))
                  } 
                </select>
              )
            }
          </PokedexContext.Consumer>


          <span className="caret"></span>
        </section>
        <button>+ Add to List</button>
      </section>
    );
  }  
}

export default DropdownSection;
