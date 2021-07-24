import Layout from 'components/Layout';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
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
    </Router>
  );
}


function Money() {
  return (
    <Layout>Money</Layout>
  );
}

function Detail() {
  return (
    <Layout>Detail</Layout>
  );
}

function Report() {
  return (
    <Layout>Report</Layout>
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
