import React from 'react';
import SectionHeader from '../components/SectionHeader';
import withPokedexContext from '../context/PokedexConsumer';

class DropdownSection extends React.Component {
  /*
  2a. `static contextType = PokedexContext` no longer needed as it's now available from props
  */
  constructor(props) {
    super(props);

    this.state = {
      /*
      2b. Now that we don't have to wait to be able to access context because it's available from props,
      we can just initialize dropdownValue with the props value.
      We also consequently no longer need componentDidMount.   
      */
      dropdownValue: this.props.pokedexContext.unseen[0]
    };
  }

  /*
  2c. Everything that used `this.context` before can now use `this.props.pokedexContext` instead.
  */
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
    /*
    2d. `pokedexContext`, provided by the PokedexConsumer HOC, is now available via props.
    */
    const { pokedexContext } = this.props;

    return (
      <section className="section dropdown-section">
        <SectionHeader>What Pokémon did you see?</SectionHeader>
        <section className="form-container">
          {/* 
          2e. We no longer need to wrap this in a Consumer!
          */}
          <select
            value={dropdownValue ? dropdownValue.id : ''} // if no more unseen, there won't be a dropdownValue
            onChange={e => this.dropdownChangeHandler(e)}>
            {
              /*
              2f. Map over the pokedexContext prop to render the options instead of using value.
              */
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

export default withPokedexContext(DropdownSection);