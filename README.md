# Panel

[![Travis CI](https://img.shields.io/travis/uclaradio/panel.svg?style=flat)](https://travis-ci.org/uclaradio/panel)
[![Codecov](https://img.shields.io/codecov/c/github/uclaradio/panel.svg)](https://codecov.io/github/uclaradio/panel)
[![Dependencies](https://david-dm.org/uclaradio/panel/status.svg?style=flat)](https://david-dm.org/uclaradio/panel)
[![Dev dependencies](https://david-dm.org/uclaradio/panel/dev-status.svg?style=flat)](https://david-dm.org/uclaradio/panel?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?style=flat)](https://github.com/facebook/jest)
[![license](https://img.shields.io/github/license/uclaradio/panel.svg)]()

An internal management panel for all UCLA Radio managers, DJs, members, and interns.

## Development

### Dependencies

Panel has a couple of dependencies that it needs before you can start developing. Make sure that you have installed the following programs:

1. A package manager. On macOS, we recommend [Homebrew](https://brew.sh); on Windows we recommend [Chocolatey](https://chocolatey.org)
2. Node. We recommend install node via your package manager. See how to do that for [Homebrew](http://brewformulas.org/Node), [Chocolatey](https://chocolatey.org/packages/nodejs).
3. [Yarn](https://yarnpkg.com/en/docs/install).
4. [VS Code](https://code.visualstudio.com)! You can develop Panel with any text editor, but we have a lot of nice features such as debugging and task running set up out of the box with VS Code. If you aren't familiar with VS Code, we recommend you check out our [list of resources, which has a VS Code section](https://github.com/uclaradio/resources#vs-code).
5. Cairo and Pango. These are libraries that are dependencies for a package we use, Trianglify. You can read about how to install them for your system [here](https://github.com/Automattic/node-canvas#installation).

### Running

Panel uses [create-react-app](https://github.com/facebook/create-react-app) (with [react-scripts-ts](https://www.npmjs.com/package/react-scripts-ts)) to make development as easy as possible.

After downloading the above dependencies, you should be able to run

```shell
yarn start
```

to start the development server. If you're on VS Code, you can also trigger this command with the command `⇧⌘B` on macOS or `Ctrl+Shift+B` on Windows.

### Committing

We use this github repository to host and maintain all Panel code.

### Debugging

To debug in VS Code, make sure that the development server is running, then select the debugging view. You can start debugging by pressing the green arrow or `F5`. Debugging is supported in Chrome and also supports Hot Module Reloading. For more information on VS Code debugging, see the VS Code documentation on [debugging](https://code.visualstudio.com/Docs/editor/debugging) and [debugging in node](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).

### Testing

We use [Jest](https://facebook.github.io/jest/) as our testing framework. To run tests, simply type:

```shell
yarn test
```

All pull requests (as well as the `master` branch) are also tested by [Travis CI](https://travis-ci.org/uclaradio/panel). Code coverage is tracked by [Codecov](https://codecov.io/gh/uclaradio/panel). All pull requests should increase or maintain the current code coverage percentage.

## Staging and Deployment

Panel is deployed with [Netlify](https://app.netlify.com/sites/uclaradio-panel). Netlify will deploy all new pull requests at unique URLs for staging.
