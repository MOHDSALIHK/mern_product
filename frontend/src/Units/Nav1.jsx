import React from 'react'
import Nav from 'react-bootstrap/Nav';

export default function Nav1() {
  return (
    
    <div>
        <Nav
      activeKey="/home"
     
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/Login' eventKey="link-1">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="" href="/additem" >Additems</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
    </Nav>
    </div>
  )
}
