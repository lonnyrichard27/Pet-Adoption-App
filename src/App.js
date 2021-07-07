import './App.css';
import SearchParams from "./SearchParams";
import Details from "./Details"
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import ThemeContext from './ThemeContext'; 
import { useState } from 'react';

function App() {
  const theme = useState("darkblue")
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
