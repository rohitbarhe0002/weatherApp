import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home'
import { Dashboard } from './Components/Dashboard';
import { Landing } from './Components/Landing';
import { History } from './Components/History';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar,Container,Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <Container>
          <Navbar bg="light" varient="dark">
            <Nav className="me-auto">
              <Link to="/Home">Home</Link>
              {/* <Link to="/Dashboard">Dashboard</Link>
              <Link to="/Landing">Landing</Link>
              <Link to="/History">History</Link> */}
            </Nav>
          </Navbar>
        </Container>


        <Route exact path="/" />
        <Route path="/Home" component={Home} />
         <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Landing" component={Landing} />
        <Route path="/History" component={History} />
         
      </Router>
    </>

  );
}

export default App;
