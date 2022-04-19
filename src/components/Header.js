import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
const Header = () => {
  return (
   
  <Navbar bg="dark" className='border-bottom border-danger'>
  <Container>
    <Navbar.Brand href="/">
      <h4 className='text-white strong'>E-Shopping</h4>
    </Navbar.Brand>
  </Container>
  </Navbar>
  
  )
}

export default Header