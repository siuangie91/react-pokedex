import React from 'react';
import SectionHeader from '../components/SectionHeader';
import PokedexContext from '../context/PokedexContext';

class DropdownSection extends React.Component {
  /*
  1a. Use `static contextType` to allow context to be accessed in this class with `this.context`.
  */
  static contextType = PokedexContext;

  constructor() {
    super();

    this.state = {
      dropdownValue: {} // "fake" init; overwritten by componentDidMount as cannot access this.context.pokedexContext from constructor
    };
  }

  /*
  1b. Set the dropdown value to the id of the first Pokemon in the unseen array after component mounts
  because now we can access the context via `this.context`, which was provided by `static contextType` above
  */
  componentDidMount() {
    this.setState({
      dropdownValue: this.context.unseen[0]
    });
  }

  /*
  1c. Handle the change event for the dropdown. The value is the unseen pokemon that is selected.
  */
  dropdownChangeHandler = e => {
    this.setState({
      dropdownValue: this.context.unseen.find(mon => mon.id === +e.target.value) // coerce as num
    });
  }

  /*
  1d. Handle click for the button. This is where we "talk" to the master state that's in the Provider.
  We call `addToSeen`, which is available via `this.context` by way of `static contextType`,
  passing in the dropdown value (the selected pokemon) from this component's state,
  as the `mon` argument.  
  */
  btnClickHandler = () => {
    const monToAdd = this.state.dropdownValue;
    this.context.addToSeen(monToAdd, () => {
      this.setState({
        dropdownValue: this.context.unseen[0]
      });
    });
  }

  render() {
    const { dropdownValue } = this.state; 

    return (
      <section className="section dropdown-section">
        <SectionHeader>What Pokémon did you see?</SectionHeader>
        <section className="form-container">
          {/*
          1e. Consume the context by wrapping the dropdown in the Context Consumer.    
          */}
          <PokedexContext.Consumer
            name="PokedexContextConsumer.DropdownSection">
            {
              /*
              1f. Render the dropdown in a function which takes the provider's `value` prop as an argument.
              This allows us to access `unseen`, `seen`, and `addToSeen`.
              */
              value => (
                <select
                  value={dropdownValue ? dropdownValue.id : ''} // if no more unseen, there won't be a dropdownValue
                  onChange={e => this.dropdownChangeHandler(e)}>
                  {
                    /*
                    1g. Dropdown should only show the unseen Pokemon.
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
        
        {
          !dropdownValue && (
            <div className="no-more-unseen">
              <p>Wow! You've seen every Pokémon!</p>
            </div>
          )
        }
      </section>
    );
  }  
}

export default DropdownSection;