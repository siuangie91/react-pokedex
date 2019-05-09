import React, { Component } from 'react';
import PokedexContext from './PokedexContext';
import pokemon from '../data/pokemon';

class PokedexProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seen: [],
      unseen: [...pokemon]
    }
  }

  addToSeen = (mon, callback = () => {}) => {
    const seenMonId = mon.id;
    const { seen, unseen } = this.state;
    this.setState({
      seen: [...seen, mon], // add to seen
      unseen: unseen.filter(mon => mon.id !== seenMonId) // filter out the one that is now seen
    }, callback);
  }

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