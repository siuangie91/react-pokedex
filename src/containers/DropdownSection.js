import React from 'react';
import SectionHeader from '../components/SectionHeader';
import PokedexContext from '../context/PokedexContext';

class DropdownSection extends React.Component {
  /*
  3a. Use `static contextType` to allow context to be accessed in this class with `this.context`.
  */
  static contextType = PokedexContext;

  constructor() {
    super();

    this.state = {
      dropdownValue: {} // "fake" init; overwritten by componentDidMount as cannot access this.context.pokedexContext from constructor
    };
  }

  /*
  3b. Set the dropdown value to the id of the first Pokemon in the unseen array after component mounts
  because now we can access the context via `this.context`, which was provided by `static contextType` above
  */
  componentDidMount() {
    this.setState({
      dropdownValue: this.context.unseen[0]
    });
  }

  /*
  3c. Handle the change event for the dropdown. The value is the unseen pokemon that is selected.
  */
  dropdownChangeHandler = e => {
    this.setState({
      dropdownValue: this.context.unseen.find(mon => mon.id === +e.target.value) // coerce as num
    });
  }

  /*
  3d. Handle click for the button. This is where we "talk" to the master state that's in the Provider.
  We call `addToSeen`, which is available via `this.context` by way of `static contextType`,
  passing in the dropdown value, which is basically the selected pokemon, from this component's state,
  as the `mon` argument.  
  */
  btnClickHandler = () => {
    this.context.addToSeen(this.state.dropdownValue);
  }

  render() {
    return (
      <section className="section dropdown-section">
        <SectionHeader>What Pokémon did you see?</SectionHeader>
        <section className="form-container">
          {/*
          3d. Consume the context by wrapping the dropdown in the Context Consumer.    
          */}
          <PokedexContext.Consumer
            name="PokedexContextConsumer.DropdownSection">
            {
              /*
              3e. Render the dropdown in a function with takes the provider's `value` prop as an argument.
              This allows us to access `unseen`, `seen`, and `addToSeen`.
              */
              value => (
                <select
                  value={this.state.dropdownValue.id}
                  onChange={e => this.dropdownChangeHandler(e)}>
                  {
                    /*
                    3f. Dropdown should only show the unseen Pokemon.
                    */
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

        <button 
          onClick={this.btnClickHandler}>
          + Add to List
        </button>
      </section>
    );
  }  
}

export default DropdownSection;
