<img src="https://i.dlpng.com/static/png/89133_thumb.png" alt="pokeball" height="50"/> &nbsp; <img src="https://people.rit.edu/jrm2516/330/gamedex/pokedex.png" alt="pokedex" height="50"/>  

# React Pokédex 

A simple prototype to demonstrate how to use Context and HOCs to manage state. 

## Branches
Each branch represents a step in the process.

- **[master](https://github.com/siuangie91/react-pokedex/tree/master)** -- Basic setup. No working functionality.
- **[1-create-context](https://github.com/siuangie91/react-pokedex/tree/1-create-context)** -- create the Context and Provider
- ![current](https://img.shields.io/badge/current-blue.svg) **2-use-provider** -- using the Context Provider without HOCs
- **[3-hocs](https://github.com/siuangie91/react-pokedex/tree/3-hocs)** -- refactor code to use HOCs
- **[4-decorators](https://github.com/siuangie91/react-pokedex/tree/4-decorators)** -- refactor code to use decorators

## Walkthrough of 2-use-provider
1. **Consume the context in `DropdownSection`.** The context will be provided via `PokedexContext.Consumer`. It takes a function whose argument is the `value` prop exposed from the provider. Use that to map over the `unseen` array to render the dropdown items. When you select an item from the dropdown, `DropdownSection`'s state will change, updating `dropdownValue` to the Pokemon you selected. When the Add button is clicked, we call the provider's `addToSeen` method.
2. **Consume the context in `PokedexSection`.** In the same way that we consumed the context in `DropdownSection`, we consume it in `PokedexSection` by wrapping `PokedexContext.Consumer` around our list and mapping over the provider's `seen` prop.
