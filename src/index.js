import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.hydrate(<App name={window.__INITIAL__DATA__.name}/>, document.getElementById('root'));