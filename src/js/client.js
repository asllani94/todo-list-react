import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Layout from "./pages/Layout";
import App from "./pages/TaskApp";
import Survey from "./pages/Menu1";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={Layout}>
      <IndexRoute component={App}/>
        <Route path="/menu1" component={Survey}/>

    </Route>
  </Router>,
app);
