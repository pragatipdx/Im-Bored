import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
   <Router>
     <div>
   <div className='App'>
      <h1>I'm Bored</h1>
    </div>
    <Switch>
      <Route path= '/'>
        <Home/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;