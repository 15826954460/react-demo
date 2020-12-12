import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import App from './pages/app/App';
import './index.css';
import About from './pages/about/About';
import My from './pages/my/My';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/home">
          <App />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/my">
          <My />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
