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
- **[1-create-context](https://github.com/siuangie91/react-pokedex/tree/1-create-context)** -- create the Context and Provider
- **[2-use-provider](https://github.com/siuangie91/react-pokedex/tree/2-use-provider)** -- using the Context Provider without HOCs
- **[3-hocs](https://github.com/siuangie91/react-pokedex/tree/3-hocs)** -- refactor code to use HOCs
- ![current](https://img.shields.io/badge/current-blue.svg) **4-decorators** -- refactor code to use decorators

## What problem are we solving?

We're not exactly solving a problem here because there really isn't any problem. However, we do have to use `withPokedexContext()` every time we want a component to access the Context. Decorators allow us to forgo that and use a `@withPokedexContext` syntax instead.

According to the Python docs, a decorator is a function that takes function and returns a replacement function, which is what a JS higher order function is, and by extension, what a React HOC is. This means that our `PokedexConsumer` HOC can be called with a decorator!

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
