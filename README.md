# React Pokédex 
A simple prototype to demonstrate how to use Context and HOCs to manage state.

## What it does
Add a Pokémon to your Pokédex, which tracks what Pokémon you've seen on your journey, by selecting a Pokémon from the dropdown on the left and clicking Add. After a Pokémon from the dropdown is added the Pokédex, it is removed from the dropdown.

## Setup
`npm install` and then `npm start`.

## Branches
Each branch represents a step in the process.

- **[master](https://github.com/siuangie91/react-pokedex/tree/master)** -- Basic setup. No working functionality.
- **[1-create-context](https://github.com/siuangie91/react-pokedex/tree/1-create-context)** -- create the Context and Provider
- ![current](https://img.shields.io/badge/current-blue.svg) **2-use-provider** -- using the Context Provider without HOCs
- **[3-hocs](https://github.com/siuangie91/react-pokedex/tree/3-hocs)** -- refactor code to use HOCs
- **[4-decorators](https://github.com/siuangie91/react-pokedex/tree/4-decorators)** -- refactor code to use decorators

## What problem are we solving?
Now that we have a Provider, what do we do with it? We have to **consume** it with a Consumer. The Consumer allows us to access the Context's state by consuming the `value` prop exposed, or provided, by the Provider.

We can now consume the Context in `DropdownSection` and `PokedexSection`. 

However, as you go through the steps, notice that those components have to do the same thing: Wrap the parts that needs the Context inside a Consumer and pull out the `value` prop.

[How can we DRY up our code?](https://github.com/siuangie91/react-pokedex/tree/3-hocs)

## Walkthrough of 2-use-provider
1. **Consume the context in `DropdownSection`.** The context will be provided via `PokedexContext.Consumer`. It takes a function whose argument is the `value` prop exposed from the provider. Use that to map over the `unseen` array to render the dropdown items. When you select an item from the dropdown, `DropdownSection`'s state will change, updating `dropdownValue` to the Pokemon you selected. When the Add button is clicked, we call the provider's `addToSeen` method.
2. **Consume the context in `PokedexSection`.** In the same way that we consumed the context in `DropdownSection`, we consume it in `PokedexSection` by wrapping `PokedexContext.Consumer` around our list and mapping over the provider's `seen` prop.
