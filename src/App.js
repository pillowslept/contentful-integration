import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';
import ProductPage from './views/ProductPage/ProductPage';
import SimplePage from './views/SimplePage/SimplePage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="main-container">
          <Switch>
            <Route path="/simple-page-1">
              <SimplePage />
            </Route>
            <Route path="/simple-page-2">
              <SimplePage />
            </Route>
            <Route path="/products/jacket">
              <ProductPage />
            </Route>
            <Route path="/products/helmet">
              <ProductPage />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
