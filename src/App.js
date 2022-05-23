import './App.css';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import DisplaySingleRecord from './pages/DisplaySingleRecord';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/ecommerce" element={ <Home/>} />
        <Route path="/ecommerce/:id" element={ <DisplaySingleRecord />} />
      </Switch>
    </Router>
  );
}

export default App;
