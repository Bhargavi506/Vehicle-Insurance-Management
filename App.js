import logo from './logo.svg';
import react from 'react';
import { Row,Col} from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';
import {BrowserRouter as Router,Route,BrowseRouter as Switch,Routes} from 'react-router-dom';
import Home from './components/Home';
import Admin from  './components/Admin';
import Menus from './components/Menus';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Header/>
        <Row>
        <Col md={6}>
          <Menus/>

          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Admin" element={<Admin/>}/>
            </Routes>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
