import React from 'react';
import { render } from 'react-dom';
import App from './App';

function renderDOM() {
  render(<App />, container);
}
renderDOM();

if (module.hot) {
  module.hot.accept('./App', () => renderDOM())
}
