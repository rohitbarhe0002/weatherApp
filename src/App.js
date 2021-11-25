import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home'
import { Weather } from './Components/Weather';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
    <Router>
      <Navbar  varient="dark">
    <Link to="/Home">Home</Link>
    <Link  to="/Weather">weather</Link>
    </Navbar>
    

    <Route exact path= "/"/>
    <Route path="/Home" component={Home}/>
    <Route path="/Weather" component={Weather}/>
    </Router>
  </>
   
  );
}

export default App;
