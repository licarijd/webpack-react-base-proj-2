import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import configureStore from './store/configureStore';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

const rootElement = document.getElementById('root')

const render = Component => {
    ReactDOM.hydrate(
      <Provider store={store}>
            <Component/>
      </Provider>,
      rootElement
    )
  }

  render(App)
//ReactDOM.hydrate(<App name={window.__INITIAL__DATA__.name}/>, document.getElementById('root'));