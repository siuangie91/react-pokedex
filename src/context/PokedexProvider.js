import React, { Component } from 'react';
import PokedexContext from './PokedexContext';
import pokemon from '../data/pokemon';

/*
2. Create the provider: This provider will provide methods by which its children components,
DropdownSection and PokedexSection, can access the same master state.
*/

class PokedexProvider extends Component {
  constructor(props) {
    super(props);

    /*
    2a. Set the initial state of the provider. This is the "master" state that the components will access.
    We want to keep track of the Pokemon you've seen as well as the ones you haven't seen yet.
    In the beginning of your Pokemon journey, you have not seen any Pokemon, so `seen` is empty.
    `unseen` is therefore all the Pokemon from the data.
    */
    this.state = {
      seen: [],
      unseen: [...pokemon]
    }
  }

  /*
  2b. Create a method that will allow us to add a Pokemon to the `seen` list and,
  therefore, remove it from the unseen list.
  */
  addToSeen = mon => {
    const seenMonId = mon.id;
    const { seen, unseen } = this.state;
    this.setState({
      seen: [...seen, mon], // add to seen
      unseen: unseen.filter(mon => mon.id !== seenMonId) // filter out the one that is now seen
    });
  }

  /*
  2c. Render this provider component as a Context Provider,
  passing in `seen` and `unseen` from the state and `addToSeen` to a `value` prop.
  This allows the consumers to access those properties via the `value` prop.
  */
  render() {
    return (
      <PokedexContext.Provider
        name="PokedexContextProvider"
        value={{
          seen: this.state.seen,
          unseen: this.state.unseen,
          addToSeen: this.addToSeen
        }}>
        {this.props.children}
      </PokedexContext.Provider>    
    );
  }
}

export default PokedexProvider;