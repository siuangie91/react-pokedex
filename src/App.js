import React from 'react';
import DropdownSection from './containers/DropdownSection';
import PokedexSection from './containers/PokedexSection';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokédex</h1>
      </header>
      
      <div className="section-container">
        <DropdownSection />
        <PokedexSection />
      </div>
    </div>
  );
}

export default App;
