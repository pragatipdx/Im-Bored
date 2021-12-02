import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import GridUtil from "./components/GridUtil";
import FrontPage from "./components/FrontPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/activities" component={GridUtil} />
        <Route path="/frontpage" component={FrontPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
