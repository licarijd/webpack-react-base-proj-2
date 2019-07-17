import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import configureStore from '../src/store/configureStore';

import App from '../src/App';
import Welcome from '../common/scenes/Welcome';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/*', render);

function render (req, res) {
    const name = 'hi';

    // Create the Redux store
    const store = configureStore(/*{ envID }*/);

    // The initial state has been prepared, and we can render the initial html
    //() => {
        const component = ReactDOMServer.renderToString(
            <Provider store={ store }>
                {/*<StaticRouter location={`${process.env.BASE_PATHNAME}${req.url}`} context = {context}>*/}
                    <App name={name}/>
                {/*</StaticRouter>*/}
            </Provider>
        );

        /*const html = `
        <!doctype html>
          <html>
          <head>
            <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
            <script>window.__PRELOADED_STATE__ = ${JSON.stringify({store})}</script>
          </head>
          <body>
          <div id="root">${component}</div>
          <script src="/static/home.js"></script>
        </body>
        </html>`*/

        // Grab the initial state from our Redux store
        const preloadedState = store.getState()

        //res.writeHead(200, { "Content-Type": "text/html"});

        //res.end(html);
    //}
        // Send the rendered page back to the client
        res.send(renderFullPage(component, preloadedState))


function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
        <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/static/bundle.js"></script>
        </body>
      </html>
      `
  }
}


app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});