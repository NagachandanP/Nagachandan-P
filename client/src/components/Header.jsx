import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import  { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
   
<Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#home"> <FaSearch/> Search Your favorite Brand <Badge bg="info">Info</Badge> </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Nagachandan P</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header