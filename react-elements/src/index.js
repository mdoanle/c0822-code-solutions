import React from 'react';
import ReactDOM from 'react-dom/client';
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const reactMaybe = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
console.log(reactMaybe);
root.render(reactMaybe);
