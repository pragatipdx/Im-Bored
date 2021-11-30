import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import GridUtil from "./components/GridUtil";
import FrontPage from "./components/FrontPage";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Results from "./components/Results";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/activities" component={GridUtil} />

        <Route path="/activities" component={GridUtil}>
          <Route path="/frontpage" component={FrontPage} />
          <Route path="" component={GridUtil} />

          <Route path="/about" component={About} />
          <Route path="/" component={MainPage} />
        </Route>
        <Route path="/frontpage" component={FrontPage} />
        <Route path="/" component={MainPage} />
        <Route path="/activities/results" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
