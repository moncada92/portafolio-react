import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


function renderDOM() {
  render(
    <Router>
      <App />
    </Router>,
    container
    );
}
renderDOM();

if (module.hot) {
  module.hot.accept('./App', () => renderDOM())
}
