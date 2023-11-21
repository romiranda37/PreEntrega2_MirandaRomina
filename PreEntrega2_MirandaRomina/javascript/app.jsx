import React from 'react';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
export default App;
<a className="nav-link" href="/catalogo">Catálogo</a>
export default NavBar;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Catalogo from './Catalogo';
import DetalleProducto from './DetalleProducto';
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/catalogo" component={Catalogo} />
          <Route path="/detalle/:id" component={DetalleProducto} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;



