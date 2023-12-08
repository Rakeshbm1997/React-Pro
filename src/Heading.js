import React , { useState } from "react";
import {Button,Container,Nav,Row,Col} from 'react-bootstrap';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faBars,faTableCells} from '@fortawesome/free-solid-svg-icons'
 import ModalComponent from './ModalComponent';
 
 

 


const Heading=({ toggleHandler,toggleHandler1 }) =>{
  
 

 const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


    return(  

        <Container fluid>
        <Row>
          <Col xs={6}>
            {/* Left side with heading text */}
            <h2 className="mt-5">Employee</h2>
            <h6>Dashboard/Employee</h6>
          </Col>


          <Col xs={6} className="d-flex align-items-center justify-content-end mt-4">        
            <Nav.Link href="/"><FontAwesomeIcon icon={faBars}  size="xl" className=" me-3 border border-2 p-2 " onClick={toggleHandler}/></Nav.Link> 
            
          
            
          <Nav.Link href="/"><FontAwesomeIcon icon={faTableCells}  size="xl" className="me-3 border border-2 p-2" onClick={toggleHandler1}/> </Nav.Link>  
         



          <Button style={{ backgroundColor: '#FF9100', borderColor: '#FF9100' }} onClick={handleShow} className="me-3 rounded-5 ">+ Add Employee</Button>
          <ModalComponent showModal={showModal} handleClose={handleClose} />
          </Col>
        </Row>
       
      </Container>
         
    
        
    );
};


export default Heading;


