import React from "react";
import { Form,Row,Col,FloatingLabel,Button, Container} from 'react-bootstrap';


const EmployeeForm=() =>{
 

    return(
      <Container fluid className="mt-5">
       <Row className="col-12" >
        <Col md >
          <FloatingLabel controlId="floatingInputGrid" label="EmployeeId" >
            <Form.Control type="Id" placeholder="" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Employee Name">
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Designation"
          >
            <Form.Select aria-label="Floating label select example">
              <option>Select Designation</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
          
        </Col>
        <Col md>
        <Button  className="mt-2 ms-5" style={{   
          width: 300,
          height: 40,backgroundColor: '#90EE90', borderColor: '#90EE90',}}>Search</Button>
        </Col>
        
      </Row>
      </Container>
     



    );
};


export default EmployeeForm;