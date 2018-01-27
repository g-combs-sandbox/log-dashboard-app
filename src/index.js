import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import WebFont from 'webfontloader';

import '../css/index.css';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
