import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';

// 100vh(view height) means always full fill screen
const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1; // this property can let element posses most space
`

const Nav = styled.div`
  border: 1px solid blue;
  >ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`
function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav>
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
        </Nav>
      </Wrapper>
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
