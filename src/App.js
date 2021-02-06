import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Counter from "./containers/Counter";
import Jotto from "./containers/Jotto";
import Main from "./containers/Main";

function App() {
  return (
    <div data-test="component__app" className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/counter" component={Counter} />
          <Route path="/jotto" component={Jotto} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
