# react-jupyter

This project takes heavily from [nteract](https://github.com/nteract/nteract)

## Installation

```bash
npm install @kyso/react-jupyter
or
yarn add @kyso/react-jupyter
```

## Demo

[https://eoinmurray.github.io/react-jupyter/](https://eoinmurray.github.io/react-jupyter/)

## Usage

```jsx
<Jupyter
  content={notebookJSON}
  showCode={true} // optional
  showOutput={true}
/>
```

- `content` - is the json content of an ipynb notebook file. Note: it must be json, not a string.
- `showCode` - (_optional_), defaults to false, whether or not to show the code and the code outputs in the notebook. It can be handy to hide the code to make a nice presentation.
- `showOput` - (_optional_), defaults to false, whether or not to show the code outputs in the notebook.
