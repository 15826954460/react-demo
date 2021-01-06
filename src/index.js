import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Home from 'pages/home/Index';
import './index.css';
import About from 'pages/login/Index';
import My from 'pages/my/Index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/my">My</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <About />
        </Route>
        <Route path="/my">
          <My />
        </Route>
      </Switch>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
