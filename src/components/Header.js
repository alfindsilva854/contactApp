import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/5tyg6YFP/Google-Contacts-logo.png"
              width="80"
              height="80"
              className="d-inline-block align-right p-3"
            />{' '}
            <b style={{color:'white'}} className='fs-2'><a style={{textDecoration:'none',color:'white'}} href='/'>Contact App</a></b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header