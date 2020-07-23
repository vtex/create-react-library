# @vtex/create-react-library

> CLI for creating reusable, modern React libraries to work with VTEX IO platform using Create-React-Library, TSDX, Storybook.

---

## Intro

In VTEX IO we believe that the development and integration of custom components to our platform should be **seamless**, **naturally documented** and that the component's **performance tradeoffs should be as clear as possible**.

In order to accomplish that, we leveraged our knowledge with the existing community tools. We forked the [Create-React-Library](https://github.com/transitive-bullshit/create-react-library) project, which is a CLI for initializaing pre-configured projects, to integrate it with our plataforms and adapt to our developers' needs. This way we strive to make the developing experience local, simple and easy to integrate. 

Besides that, in our vtex template we utilize [TSDX](https://github.com/formium/tsdx) to easily catch bugs, build and test. Also, [Storybook](https://storybook.js.org/) is used as a tool to visualize and document.

In the future, we intend to implement metrics and heuristics to assess the possible performance tradeoffs of the built components.   

<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/vtex/create-react-library/readme/media/demo.png">
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
  <img width="600" src="https://github.com/vtex/create-react-library/blob/readme/media/tree.png?raw=true">
</p>

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
yarn start # runs TSDX with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
yarn storybook # runs Storybook server
```

Now, anytime you make a change to your library in `src/` or to the example storybook documentation `./stories`, `Storybook` will live-reload your local dev server so you can iterate on your component in real-time.

#### Publishing to npm

```bash
npm publish
```

This builds `commonjs` and `es` versions of your module to `dist/` and then publishes your module to `npm`.

Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)