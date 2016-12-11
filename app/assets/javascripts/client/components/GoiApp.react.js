import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

import Main from './Main.react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const routes = (
<Router history={browserHistory}>
   <Route components={Main} path="/">
     <IndexRoute component={Main} />
  </Route>
 </Router>
);

global.onload = function ( ){
render(routes, document.querySelector("#mount-point"));
}
