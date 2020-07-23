# @vtex/create-react-library

> CLI for creating reusable, modern React libraries to work with VTEX IO platform using Rollup, TSDX, Storybook.

<!-- [![NPM](https://img.shields.io/npm/v/create-react-library.svg)](https://www.npmjs.com/package/create-react-library) [![Build Status](https://travis-ci.com/transitive-bullshit/create-react-library.svg?branch=master)](https://travis-ci.com/transitive-bullshit/create-react-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->

<!-- --- -->

<!-- <div align="center">
	<a href="https://saasify.sh" title="Saasify">
		<div>
      <img src="https://docs.saasify.sh/_media/logo.png" alt="Saasify Logo" width="200" />
		</div>
    <sup>This project is sponsored by Saasify.</sup><br />
		<sup><b>The easiest way to monetize your APIs</b></sup>
	</a>
</div> -->

---

## Intro

In VTEX IO we believe that the development and integration of custom components to our platform should be **seamless**, **naturally documented** and that the component's **performance tradeoffs should be as clear as possible**.

In order to accomplish that, we leveraged our knowledge with the existing community tools. We forked the <a>Create-React-Library</a> project, which is a CLI for initializaing pre-configured projects, to integrate it with our plataforms and adapt to our developers' needs. This way we strive to make the developing experience local, simple and easy to integrate. 

Besides that, in our vtex template we utilize <a>TSDX</a> to easily catch bugs, build and test. Also, <a>Storybook</a> is used as a tool to visualize and document.

In the future, we intend to implement metrics and heuristics to assess the possible performance tradeoffs of the built components.   

<p align="center">
  <img width="600" src="https://cdn.rawgit.com/vtex/create-react-library/readme/media/demo.png">
</p>

## Features

- Easy-to-use CLI
- Handles all modern JS features
- Seamless integration with VTEX IO
- [Storybook](https://github.com/facebookincubator/create-react-app) for example usage and local dev
- [TSDX](https://rollupjs.org/) for bundling
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
  <img width="600" src="https://cdn.rawgit.com/vtex/create-react-library/readme/media/tree.png">
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

#### Deploying to Github Pages

```bash
npm run deploy
```

This creates a production build of the example `create-react-app` that showcases your library and then runs `gh-pages` to deploy the resulting bundle.

## Use with React Hooks

If you use [react-hooks](https://reactjs.org/docs/hooks-intro.html) in your project, when you debug your example you may run into an exception [Invalid Hook Call Warning](https://reactjs.org/warnings/invalid-hook-call-warning.html). This [issue](https://github.com/facebook/react/issues/14257) explains the reason, your lib and example use a different instance, one solution is rewrite the `react` path in your example's `package.json` to 'file:../node_modules/react' or 'link:../node_modules/react'.

## Examples

### Multiple Named Exports

Here is a [branch](https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/multiple-exports) which demonstrates how to use multiple named exports. The module in this branch exports two components, `Foo` and `Bar`, and shows how to use them from the example app.

### Material-UI

Here is a [branch](https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/material-ui) which demonstrates how to make use of a relatively complicated peer dependency, [material-ui](https://github.com/mui-org/material-ui). It shows the power of [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external) which makes it a breeze to create reusable modules that include complicated material-ui subcomponents without having them bundled as a part of your module.

### Boilerplate

The CLI is based on this [boilerplate](https://github.com/transitive-bullshit/react-modern-library-boilerplate), which you can optionally read about [here](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7).

### Libraries

Here are some example libraries that have been bootstrapped with `create-react-library`.

- [tabler-react](https://github.com/tabler/tabler-react) - React components and demo for the Tabler UI theme.
- [react-background-slideshow](https://github.com/transitive-bullshit/react-background-slideshow) - Sexy tiled background slideshow for React 🔥
- [react-starfield-animation](https://github.com/transitive-bullshit/react-starfield-animation) -Canvas-based starfield animation for React ✨
- [react-particle-effect-button](https://github.com/transitive-bullshit/react-particle-effect-button) - Bursting particle effect buttons for React 🎉
- [react-particle-animation](https://github.com/transitive-bullshit/react-particle-animation) - Canvas-based particle animation for React 🌐
- [react-block-image](https://github.com/transitive-bullshit/react-block-image) - React replacement for img with more control + fallback support 🌃
- [react-mp3-recorder](https://github.com/transitive-bullshit/react-mp3-recorder) - Microphone recorder for React that captures mp3 audio 🎵
- [react-before-after-slider](https://github.com/transitive-bullshit/react-before-after-slider) - A sexy image comparison slider for React.
- [worldwind-react-globe](https://github.com/emxsys/worldwind-react-globe) - NASA WorldWind globe component for React.
- [react-shimmer](https://github.com/gokcan/react-shimmer) - Shimmer effect for loading images.
- [react-login-modal-sm](https://github.com/Silind/react-login-modal-sm) - Customizable React social media login modal.
- [react-gradient-scroll-indicator](https://github.com/jbccollins/react-gradient-scroll-indicator) - Wrapper for scrollable content with gradients.
- [react-editext](https://github.com/alioguzhan/react-editext) - Editable Text Component.
- ... and hundreds more!

Want to see a more completed list? Check out [Made with CRL](https://made-with-crl.netlify.com/)

Want to add yours to the list? Submit an [PR](https://github.com/HurricaneInteractive/made-with-crl#adding-a-library) at the _Made with CRL_ repository.

## Notice

My open source efforts are now focused on [Saasify](https://github.com/saasify-sh/saasify), and I am not able to invest a significant amount of time into maintaining CRL anymore. I am looking for volunteers who would like to become active maintainers on the project. If you are interested, please shoot me a note.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
