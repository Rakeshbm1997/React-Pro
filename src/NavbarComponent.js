
import React from 'react';
import { Navbar, Nav,Form,NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBarsStaggered, faBell,faComment} from '@fortawesome/free-solid-svg-icons'
import Navbar_Logo from './Navbar_Logo.png';


const NavbarComponent = () => {

  const navbarStyle = {
    background: 'linear-gradient(to right, #FFA500, #FF6347)', // Orange gradient
  };
    
  return (
      
    <Navbar style={navbarStyle} variant="dark" expand="lg" >
    
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        
          
          <Nav.Link href="/"><img src={Navbar_Logo} alt="Navbar_Logo"  width={25} height={25}/></Nav.Link> 
          <Nav.Link href="/"><FontAwesomeIcon icon={faBarsStaggered}  size="xl" className='ms-3'  /></Nav.Link>
          <div class='text-light ps-5 mt-1'> <h4>Dreamguy's Technologies</h4> </div>
          </Nav>
        

        <Nav className='ms-auto' >
          <Form inline className="me-4 " >
          <Form.Control type="Search"  placeholder="Search"  />
          </Form>
         


        <NavDropdown title="Language" id="basic-nav-dropdown" className="me-3 " >
          <NavDropdown.Item href="#action/1">Kannada</NavDropdown.Item>
          <NavDropdown.Item href="#action/2">English</NavDropdown.Item>
          <NavDropdown.Item href="#action/3">Hindi</NavDropdown.Item>
          
          
        </NavDropdown>
    


     <Nav.Link className="me-3">
      <FontAwesomeIcon icon={faBell} size="xl" />
        </Nav.Link>


     <Nav.Link className="me-3 ">
      <FontAwesomeIcon icon={faComment} size="xl" />    
       </Nav.Link>

   
       <NavDropdown title="ADMIN" id="basic-nav-dropdown" className="me-5" >
          <NavDropdown.Item href="#action/1">LogIn</NavDropdown.Item>
          <NavDropdown.Item href="#action/2">SingIn</NavDropdown.Item>
          <NavDropdown.Item href="#action/3">Setting</NavDropdown.Item>
          
        </NavDropdown>
    
    

        </Nav>
      </Navbar.Collapse>
      

    </Navbar>
  
    
  );
};

export default NavbarComponent;
