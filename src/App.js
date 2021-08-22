import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Single from './Single';
import Create from './Create';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/edit/:id'>
            <Edit />
          </Route>
          <Route path='/:id'>
            <Single />
          </Route>
          <Route path='*'>
            <h1>404 : Err</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
