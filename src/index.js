import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import Dashboard from './components/Dashboard';
import * as serviceWorker from './serviceWorker';
import "./styles/tailwind.css";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-27427363-14');

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Dashboard />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
