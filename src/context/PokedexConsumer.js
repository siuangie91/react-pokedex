import React, { Component } from 'react';
import PokedexContext from './PokedexContext';

/*
1a. Create a higher order component, which essentially takes a wrapped component and
returns a new component with the wrappe component inside it. 
This allows the wrapped component to access the props provided by the wrapper.
*/
const withPokedexContext = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        /*
        1b. For our HOC, we want any component wrapped by withPokedexContext to have access to the Context.
        So we wrap the WrappedComponent that's passed in inside a Consumer.
        */
        <PokedexContext.Consumer>
          {
            /*
            1c. Previously, we passed in a function of this sort inside `DropdownSection` and `PokedexSection`.
            Now we can just do it here, and pass the value to the WrappedComponent.
            */
            value => <WrappedComponent pokedexContext={value} {...this.props} />
          }
        </PokedexContext.Consumer>     
      )
    }
  }
};

export default withPokedexContext;