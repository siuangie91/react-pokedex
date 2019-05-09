import React from 'react';
import DropdownSection from './containers/DropdownSection';
import PokedexSection from './containers/PokedexSection';
import PokedexProvider from './context/PokedexProvider';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Pokédex</h1>
      </header>
      
      <div className="section-container">
        {/*
        2d. Wrap the consumer components inside the provider.
        */}
        <PokedexProvider>
          <DropdownSection />
          <PokedexSection />
        </PokedexProvider>
      </div>
    </div>
  );
}

export default App;
