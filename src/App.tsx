import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Detail from 'views/Detail';
import Money from 'views/Money';
import NotFound from 'views/NotFound';
import Report from 'views/Report';

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

export default App;
