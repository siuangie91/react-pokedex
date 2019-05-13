<img src="https://i.dlpng.com/static/png/89133_thumb.png" alt="pokeball" height="50"/> &nbsp; <img src="https://people.rit.edu/jrm2516/330/gamedex/pokedex.png" alt="pokedex" height="50"/>  

# React Pokédex 
A simple prototype to demonstrate how to use Context and HOCs to manage state.

## What it does
Add a Pokémon to your Pokédex, which tracks what Pokémon you've seen on your journey, by selecting a Pokémon from the dropdown on the left and clicking Add. 

## Setup
`npm install` and then `npm start`.

## Branches
Each branch represents a step in the process.

- **[master](https://github.com/siuangie91/react-pokedex/tree/master)** -- Basic setup. No working functionality.
- **[1-create-context](https://github.com/siuangie91/react-pokedex/tree/1-create-context)** -- create the Context and Provider
- **[2-use-provider](https://github.com/siuangie91/react-pokedex/tree/2-use-provider)** -- using the Context Provider without HOCs
- ![current](https://img.shields.io/badge/current-blue.svg) **3-hocs** -- refactor code to use HOCs
- **[4-decorators](https://github.com/siuangie91/react-pokedex/tree/4-decorators)** -- refactor code to use decorators

## Walkthrough of 3-hocs
1. **Create the Consumer HOC** in `src/context` as `PokedexConsumer.js`. This HOC will take a `WrappedComponent` that it will then wrap inside the Context Consumer.
2. **Use the HOC** for the components -- `DropdownSection` and `PokedexSection` -- that need to consume the Context. We now no longer need to use `static contextType` and `this.context` and instead use `pokedexContext` from props.