import React from 'react';
import SectionHeader from '../components/SectionHeader';
import PokedexContext from '../context/PokedexContext';

class DropdownSection extends React.Component {
  static contextType = PokedexContext;

  constructor() {
    super();

    this.state = {
      dropdownValue: {} // "fake" init; overwritten by componentDidMount as cannot access this.context.pokedexContext from constructor
    };
  }

  componentDidMount() {
    this.setState({
      dropdownValue: this.context.unseen[0]
    });
  }

  dropdownChangeHandler = e => {
    this.setState({
      dropdownValue: this.context.unseen.find(mon => mon.id === +e.target.value) // coerce as num
    });
  }

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
          
          <PokedexContext.Consumer
            name="PokedexContextConsumer.DropdownSection">
            {
              value => (
                <select
                  value={dropdownValue ? dropdownValue.id : ''} // if no more unseen, there won't be a dropdownValue
                  onChange={e => this.dropdownChangeHandler(e)}>
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