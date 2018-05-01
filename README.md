# react-jupyter

This project takes heavily from [nteract](https://github.com/nteract/nteract)

## Installation

```bash
npm install @kyso/react-jupyter
or
yarn add @kyso/react-jupyter
```

## Demo

[https://react-jupyter.oss.kyso.io/](https://react-jupyter.oss.kyso.io/)

## Usage

```jsx

import Jupyter from '@kyso/react-jupyter'

<Jupyter
  content={notebookJSON}
  showCode={true} // optional
  showOutput={true}
/>
```

- `content` - is the json content of an ipynb notebook file. Note: it must be json, not a string.
- `showCode` - (_optional_), defaults to false, whether or not to show the code and the code outputs in the notebook. It can be handy to hide the code to make a nice presentation.
- `showOput` - (_optional_), defaults to false, whether or not to show the code outputs in the notebook.


## Dev

```
yarn
yarn run dev
```

This will open a window there the renderer is displayed, then edit the files in src to make changes.

Deploy library:

```
npm version patch
npm publish -d
```

Deploy demo

```
yarn run export
cd out
now
```
