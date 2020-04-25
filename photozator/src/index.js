import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import M from 'materialize-css';

const store = createStore(rootReducer, applyMiddleware(thunk)); //Create redux store

store.subscribe(() => {
  setInterval(() => {
    M.textareaAutoResize(document.getElementById("ImageText"));
    M.textareaAutoResize(document.getElementById("TranslatedText"));
  }, 500)
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();