import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Jotto from "./components/Jotto";

function App() {
  return (
    <div data-test="component__app" className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route exact path="/jotto" component={Jotto} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
