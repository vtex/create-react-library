# @vtex/create-react-library

> CLI for creating reusable, modern React libraries to work with VTEX IO platform using Create-React-Library, TSDX, Storybook.

---

## Intro

In VTEX IO we believe that the development and integration of custom components to our platforms should be **simple**, **seamless** and **naturally documented**. This is a CLI which helps you to start your React components and to have the best developing experience. Run them on VTEX IO stores or anywhere you want.

The template provided allows you to develop your component in a familiar environment with community tools and still be able to link it to your VTEX IO store. Besides that, in our vtex template we utilize [TSDX](https://github.com/formium/tsdx) to easily catch bugs, build and test. Also, [Storybook](https://storybook.js.org/) is used as a tool for visualization and documentation.

<p align="center">
  <img width="500" src="https://raw.githubusercontent.com/vtex/create-react-library/master/media/demo.png">
</p>

## Features

- Easy-to-use CLI
- Handles all modern JS features
- Seamless integration with VTEX IO
- [Storybook](https://github.com/facebookincubator/create-react-app) for example usage and local dev
- [TSDX](https://github.com/formium/tsdx) for bundling
- [Babel](https://babeljs.io/) for transpiling
- Supports complicated peer-dependencies
- Supports CSS modules
- Support for TypeScript
- Sourcemap creation
- Treeshaking

## Install globally

This package requires `node >= 10`.

```bash
npm install -g @vtex/create-react-library
```

## Usage with npx

```bash
npx @vtex/create-react-library
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

## Creating a New Module

```bash
create-react-library
```

Answer some basic prompts about your module, and then the CLI will perform the following steps:

- copy over the template
- install dependencies via yarn or npm
- link packages together for local development
- initialize local git repo

At this point, your new module should resemble this screenshot and is all setup for local development.

<p align="center">
  <img width="300" src="https://raw.githubusercontent.com/vtex/create-react-library/master/media/tree.png">
</p>

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
yarn start # runs TSDX with watch flag
```

The second part will be running the `stories/` of Storybook that's linked to the local version of your module.

```bash
# (in another tab)
yarn storybook # runs Storybook server
```

Now, anytime you make a change to your library in `src/` or to the example storybook documentation `stories/`, `Storybook` will live-reload your local dev server so you can iterate on your component in real-time in an isolated environment.

Link your component to your VTEX IO store using [VTEX Toolbelt](https://github.com/vtex/toolbelt#vtex-toolbelt) `REMEMBER TO INDICATE THE RIGHT VERSION`.

```bash
vtex link # runs VTEX Toolbelt
```

Or publish in NPM and use it anywhere.

```bash
npm publish
```

This builds `commonjs` and `es` versions of your module to `dist/` and then publishes your module to `npm`.

Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

### Integration with VTEX IO
Inside the project all the IO tools for development are still available. There is a `./react` folder with an `Adapter.tsx` component which connects your `src/index.tsx` to the store. There you can make the changes specific to the [VTEX Pages Admin](https://vtex.io/docs/app/vtex.admin-pages@4.26.0/) schema, for instance, as you would in any VTEX IO app. Similarly, with the `./store/interfaces.json` you can edit the interface of your component to the store.

## License

MIT ©
