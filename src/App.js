import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import About from './about';
import Welcome from './welcome';

import './App.css';

function App() {
  return (
    <BrowserRouter>

    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>

    <hr />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
