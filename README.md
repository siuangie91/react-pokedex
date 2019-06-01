# React Pokédex 
A simple prototype to demonstrate how to use Context and HOCs to manage state.

## What it does
Add a Pokémon to your Pokédex, which tracks what Pokémon you've seen on your journey, by selecting a Pokémon from the dropdown on the left and clicking Add. After a Pokémon from the dropdown is added the Pokédex, it is removed from the dropdown.

## Setup
`npm install` and then `npm start`.

## Branches
Each branch represents a step in the process.

- ![current](https://img.shields.io/badge/current-blue.svg) **master** -- Basic setup. No working functionality.
- **[1-create-context](https://github.com/siuangie91/react-pokedex/tree/1-create-context)** -- create the Context and Provider
- **[2-use-provider](https://github.com/siuangie91/react-pokedex/tree/2-use-provider)** -- using the Context Provider without HOCs
- **[3-hocs](https://github.com/siuangie91/react-pokedex/tree/3-hocs)** -- refactor code to use HOCs
- **[4-decorators](https://github.com/siuangie91/react-pokedex/tree/4-decorators)** -- refactor code to use decorators

## What problem are we solving?
`DropdownSection` and `PokedexSection` are _sibling_ components, but they share the same state! How would we get them to update at the same time? 

One option is to put all the state management inside `App`. This would mean that we'd have the pass that to `DropdownSection` and `PokedexSection` as props. This is fine for how simple this is. But what if `DropdownSection` were the grandchild of `OtherComponent` and `PokedexSection` were the great-grandchild of `YetAnotherComponent`? We'd have to drill those props all the way down! (Hence, "prop drilling.")

Another option is to use Redux, but for an app this simple, there is no need for that much overhead.

[Context solves this problem for us!](https://github.com/siuangie91/react-pokedex/tree/1-create-context)

## Walkthroughs
Walkthroughs of each step will be in that branch's readme. Each step will have a corresponding comment in file(s) mentioned in that step.