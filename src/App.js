import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MyForm from './MyForm'
import Props from './Props'
import Navba from './Navba'
import {Nav} from 'react-bootstrap';



function App() {
  return (
    <Router> 
       <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  
  <Nav.Item>
    <Link to="/" >Home</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/home">
      About
    </Link>
  </Nav.Item>
</Nav>

      <Switch>
      <Route exact path="/" component={MyForm}/>
      <Route exact path="/home" component={Props}/>
     </Switch>
     
      
 </Router>
  );
}

export default App;
