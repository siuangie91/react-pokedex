# React Pokédex

A simple prototype to demonstrate how to use Context and HOCs to manage state.

## What it does

Add a Pokémon to your Pokédex, which tracks what Pokémon you've seen on your journey, by selecting a Pokémon from the dropdown on the left and clicking Add. After a Pokémon from the dropdown is added the Pokédex, it is removed from the dropdown.

**Demo**: [https://react-pokedex-context.onrender.com/](https://react-pokedex-context.onrender.com/)

## Setup

`npm install` and then `npm start`.

## Branches

Each branch represents a step in the process.

- **[master](https://github.com/siuangie91/react-pokedex/tree/master)** -- Basic setup. No working functionality.
- ![current](https://img.shields.io/badge/current-blue.svg) **1-create-context** -- create the Context and Provider
- **[2-use-provider](https://github.com/siuangie91/react-pokedex/tree/2-use-provider)** -- using the Context Provider without HOCs
- **[3-hocs](https://github.com/siuangie91/react-pokedex/tree/3-hocs)** -- refactor code to use HOCs
- **[4-decorators](https://github.com/siuangie91/react-pokedex/tree/4-decorators)** -- refactor code to use decorators

## What problem are we solving?

On the `master` branch we mentioned that Context solves the problem of prop drilling. Context acts as the master state by which our components can get info to do what it needs to do.

In order to use Context, we must **create** it, **provide** it, and **consume** it.

## Walkthrough of 1-create-context

1. **Create the context.** Create a new folder: `src/context`. Then create a new file `PokedexContext.js` in that folder and use `React.createContext()` to generate the context, passing in the `pokemon` data as the default value.
2. **Create the provider** that will provide your components with the context -- `PokedexProvider.js`. Wrap the components that need the context -- `DropdownSection` and `PokedexSection` -- in this provider in `App.js`.
