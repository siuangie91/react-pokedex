import React, { Component } from 'react';
import PokedexContext from './PokedexContext';

const withPokedexContext = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <PokedexContext.Consumer>
          {
            value => <WrappedComponent pokedexContext={value} {...this.props} />
          }
        </PokedexContext.Consumer>     
      )
    }
  }
};

export default withPokedexContext;