import React from 'react';
import pokemon from '../data/pokemon';
import SectionHeader from '../components/SectionHeader';

class DropdownSection extends React.Component {
  render() {
    return (
      <section className="section dropdown-section">
        <SectionHeader>What Pokémon did you see?</SectionHeader>
        <section className="form-container">
          <select>
            {
              pokemon.map((mon, i) => (
                <option key={i} value={mon.id}>{mon.id}. {mon.name}</option>    
              ))
            }
          </select>
        </section>
      </section>
    );
  }  
}

export default DropdownSection;