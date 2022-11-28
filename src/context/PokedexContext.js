import React from 'react';
import pokemon from '../data/pokemon';

/* 
1. Create the context, passing in the pokemon data as defaultValue, which is for "backup" purposes.
https://reactjs.org/docs/context.html#reactcreatecontext
*/
const PokedexContext = React.createContext(pokemon);

export default PokedexContext;