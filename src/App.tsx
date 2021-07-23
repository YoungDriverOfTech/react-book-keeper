import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/money">money</Link>
          </li>
          <li>
            <Link to="/detail">detail</Link>
          </li>
          <li>
            <Link to="/report">report</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Redirect exact from="/" to="/money"/>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


function Money() {
  return (
    <div>
      <h2>Money</h2>
    </div>
  );
}

function Detail() {
  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
}

function Report() {
  return (
    <div>
      <h2>Report</h2>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>
        Not Found
      </h2>
    </div>
  )
}

export default App;
