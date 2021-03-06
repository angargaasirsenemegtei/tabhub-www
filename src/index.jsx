import React from 'react';
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'

import routes from './Routes'

ReactDOM.render(
  (
    <Router history={hashHistory} >{routes}></Router>
  ),
  document.querySelector("#root")
)
