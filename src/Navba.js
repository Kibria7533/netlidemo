import React from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Navba = () => {
    return (
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
    );
};

export default Navba;