import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppController from './app/AppController';
import App from './App';
import * as serviceWorker from './serviceWorker';

const appController = new AppController();

ReactDOM.render(
  <React.StrictMode>
    <App appController = {appController}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
