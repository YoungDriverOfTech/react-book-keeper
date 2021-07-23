import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav'

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
        <Nav />
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
