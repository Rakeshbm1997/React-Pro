// ModalComponent.js
import React from 'react';
import { Modal, Button,Form, Row,Col,Container} from 'react-bootstrap';

const ModalComponent = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}  size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Add Employee</Modal.Title>
      </Modal.Header>
     
     
     
     
      <Modal.Body>

    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
      <Form.Group as={Col}  controlId="formGridEmployeeId">
        <Form.Label>Employee Id</Form.Label>
        <Form.Control placeholder="number" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridJoioningDate">
        <Form.Label>Joining Date</Form.Label>
        <Form.Control type="Date"  placeholder="" />
      </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type='number' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCompany">
          <Form.Label>Company</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
       </Row>


       <Row className="mb-3">
       <Form.Group as={Col} controlId="formGridCompany">
          <Form.Label>Department</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

       <Form.Group as={Col} controlId="formGridCompany">
          <Form.Label>Designation</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
       </Row>
       <hr/>
       
      
       <Container>
      <Row>
        <Col>
          <h6 className="d-inline-block ">Module Permission</h6> 
          <h6 className="d-inline-block float-end mx-3">Export</h6>   
          <h6 className="d-inline-block float-end mx-3">Import</h6>
         <h6 className="d-inline-block float-end mx-3">Delete</h6>
          <h6 className="d-inline-block float-end mx-3">Create</h6>
          <h6 className="d-inline-block float-end mx-3">Write</h6>
          <h6 className="d-inline-block float-end mx-3">Read</h6> 
        </Col>
      </Row>
    </Container>
        
       
     <div>
    <span>Holidays</span>
       <Form.Check name='inlineCheck' id='inlineCheckbox1' value='option1'className="d-inline-block float-end me-5 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox2' value='option2' className="d-inline-block float-end me-2 ms-5"  inline /> 
      <Form.Check name='inlineCheck' id='inlineCheckbox3' value='option3' className="d-inline-block float-end me-2 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox4' value='option1' className="d-inline-block float-end me-3 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox5' value='option2' className="d-inline-block float-end me-4 ms-2" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox6' value='option3' className='float-end me-5 ' inline />
      </div>


     <div>
    <span>Leaves</span>
       <Form.Check name='inlineCheck' id='inlineCheckbox7' value='option1'className="d-inline-block float-end me-5 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox8' value='option2' className="d-inline-block float-end me-2 ms-5"  inline /> 
      <Form.Check name='inlineCheck' id='inlineCheckbox9' value='option3' className="d-inline-block float-end me-2 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox10' value='option1' className="d-inline-block float-end me-3 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox11' value='option2' className="d-inline-block float-end me-4 ms-2" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox12' value='option3' className='float-end me-5 ' inline />
      </div>

      <div>
    <span>Client</span>
       <Form.Check name='inlineCheck' id='inlineCheckbox13' value='option1'className="d-inline-block float-end me-5 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox14' value='option2' className="d-inline-block float-end me-2 ms-5"  inline /> 
      <Form.Check name='inlineCheck' id='inlineCheckbox15' value='option3' className="d-inline-block float-end me-2 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox16' value='option1' className="d-inline-block float-end me-3 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox17' value='option2' className="d-inline-block float-end me-4 ms-2" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox18' value='option3' className='float-end me-5 ' inline />
      </div>

      <div>
    <span>Project</span>
       <Form.Check name='inlineCheck' id='inlineCheckbox19' value='option1'className="d-inline-block float-end me-5 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox20' value='option2' className="d-inline-block float-end me-2 ms-5"  inline /> 
      <Form.Check name='inlineCheck' id='inlineCheckbox21' value='option3' className="d-inline-block float-end me-2 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox22' value='option1' className="d-inline-block float-end me-3 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox23' value='option2' className="d-inline-block float-end me-4 ms-2" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox24' value='option3' className='float-end me-5 ' inline />
      </div>

      <div>
    <span>Task</span>
       <Form.Check name='inlineCheck' id='inlineCheckbox25' value='option1'className="d-inline-block float-end me-5 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox26' value='option2' className="d-inline-block float-end me-2 ms-5"  inline /> 
      <Form.Check name='inlineCheck' id='inlineCheckbox27' value='option3' className="d-inline-block float-end me-2 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox28' value='option1' className="d-inline-block float-end me-3 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox29' value='option2' className="d-inline-block float-end me-4 ms-2" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox30' value='option3' className='float-end me-5 ' inline />
      </div>

      <div>
    <span>Charts</span>
       <Form.Check name='inlineCheck' id='inlineCheckbox31' value='option1'className="d-inline-block float-end me-5 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox32' value='option2' className="d-inline-block float-end me-2 ms-5"  inline /> 
      <Form.Check name='inlineCheck' id='inlineCheckbox33' value='option3' className="d-inline-block float-end me-2 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox34' value='option1' className="d-inline-block float-end me-3 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox35' value='option2' className="d-inline-block float-end me-4 ms-2" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox36' value='option3' className='float-end me-5 ' inline />
      </div>

      <div>
    <span>Assets</span>
       <Form.Check name='inlineCheck' id='inlineCheckbox37' value='option1'className="d-inline-block float-end me-5 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox38' value='option2' className="d-inline-block float-end me-2 ms-5"  inline /> 
      <Form.Check name='inlineCheck' id='inlineCheckbox39' value='option3' className="d-inline-block float-end me-2 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox40' value='option1' className="d-inline-block float-end me-3 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox41' value='option2' className="d-inline-block float-end me-4 ms-2" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox42' value='option3' className='float-end me-5 ' inline />
      </div>

      <div>
    <span>Timing Sheets</span>
       <Form.Check name='inlineCheck' id='inlineCheckbox43' value='option1'className="d-inline-block float-end me-5 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox44' value='option2' className="d-inline-block float-end me-2 ms-5"  inline /> 
      <Form.Check name='inlineCheck' id='inlineCheckbox45' value='option3' className="d-inline-block float-end me-2 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox46' value='option1' className="d-inline-block float-end me-3 ms-5" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox47' value='option2' className="d-inline-block float-end me-4 ms-2" inline />
      <Form.Check name='inlineCheck' id='inlineCheckbox48' value='option3' className='float-end me-5 ' inline />
      </div>     
 
    </Form>
    
  
 

      </Modal.Body>
      
      <Modal.Footer className="d-flex justify-content-center align-items-center vh-10">
        
        <Button style={{ backgroundColor: '#FF9100', borderColor: '#FF9100' }}   onClick={handleClose}>
          ADD
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
