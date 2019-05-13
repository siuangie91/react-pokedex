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
- **[3-hocs](https://github.com/siuangie91/react-pokedex/tree/3-hocs)** -- refactor code to use HOCs
- ![current](https://img.shields.io/badge/current-blue.svg) **4-decorators** -- refactor code to use decorators

## Note regarding decorators and `create-react-app`:

In order to use decorators, we need to add a Babel plugin. Since we set up this app using `create-react-app`, which [doesn't support decorators](https://facebook.github.io/create-react-app/docs/can-i-use-decorators) at the time of writing, we have to `npm eject` before we can install the Babel plugin and add it to our `package.json`.

The steps below have already been done so you can skip to the walkthrough, but I've documented them here for reference's sake.
1. Run `npm eject`.
2. Install the Babel `plugin-proposal-decorators` plugin as a dev dependency with `npm install --save-dev @babel/plugin-proposal-decorators`.
3. Configure Babel in `package.json`:
```javascript
...
"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
...
```
4. You can now start your app again.

## Walkthrough of 4-decorators
:warning: When you check out this branch, you _must_ run `npm install` again and then `npm start` because the config has changed due to our ejection. You _must_ do the same when you switch back to the previous branches that did not use decorators.

1. **Add the decorator to `DropdownSection` and `PokedexSection`.** This allows us to export the components without having to wrap it inside the HOC using `withPokedexContext()`.

## Further reading

- [Exploring EcmaScript Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)
- [Enhancing React Components with decorators](https://medium.com/@gigobyte/enhancing-react-components-with-decorators-441320e8606a)