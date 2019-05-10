import React, { Component } from 'react';
import SectionHeader from '../components/SectionHeader';
import withPokedexContext from '../context/PokedexConsumer';

/*
1a. Add the decorator using the @ syntax.
According to the Python wiki, "a decorator is a callable that takes a function as an
argument and returns a replacement function." This sounds very similar to a JS
higher order function, and by extension, a React higher order component. Since our
withPokedexContext HOC is essentially doing this exact thing, we can use it as a decorator.
It will receive the component below it as the wrapped component.
*/
@withPokedexContext
class DropdownSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: this.props.pokedexContext.unseen[0]
    };
  }

  dropdownChangeHandler = e => {
    this.setState({
      dropdownValue: this.props.pokedexContext.unseen.find(mon => mon.id === +e.target.value) // coerce as num
    });
  }

  btnClickHandler = () => {
    const monToAdd = this.state.dropdownValue;
    this.props.pokedexContext.addToSeen(monToAdd, () => {
      this.setState({
        dropdownValue: this.props.pokedexContext.unseen[0]
      });
    });
  }

  render() {
    const { dropdownValue } = this.state;
    const { pokedexContext } = this.props;

    return (
      <section className="section dropdown-section">
        <SectionHeader>What Pokémon did you see?</SectionHeader>
        <section className="form-container">
          <select
            value={dropdownValue ? dropdownValue.id : ''} // if no more unseen, there won't be a dropdownValue
            onChange={e => this.dropdownChangeHandler(e)}>
            {
              pokedexContext.unseen.map((mon, i) => (
                <option key={i} value={mon.id}>{mon.id}. {mon.name}</option>
              ))
            }
          </select>
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

/*
1b. Export the component as normal.
*/
export default DropdownSection;