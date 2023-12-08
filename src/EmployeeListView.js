import React from 'react';
import { ListGroup, Image, Row,Col,Card } from 'react-bootstrap';
import jsonData from './EmployeeData.json'


const EmployeeListView = () => {
  return (
    <Card className='mt-3'>
        <Row className="col-12">
        <Col>
      <Card.Header>Employee</Card.Header>
      </Col>
      <Col>
      <Card.Header>EmpId</Card.Header>
      </Col>
      <Col>
      <Card.Header>Employee Name</Card.Header>
      </Col>
      <Col>
      <Card.Header>Designation</Card.Header>
      </Col>
      <Col>
      <Card.Header>Mobile</Card.Header>
      </Col>
      </Row>
    <ListGroup>
      {jsonData.map((employee,index) => (
        <ListGroup.Item key={index}>


        <div>
        <Row className="col-12">
          <Col>
          <Image
            src={employee.img}
            alt={`Image of ${employee.name}`}
            roundedCircle
            style={{ marginRight: '10px', width: '50px', height: '50px', objectFit: 'cover' }}/>
          </Col>
    
         <Col>
         
         <p>{employee.id}</p>
        </Col>

        <Col>   
         <strong>{employee.name}</strong>
        </Col>

        <Col>   
        <strong>{employee.designation}</strong>
        </Col>

        <Col>   
        <strong>{employee.mobile}</strong>
        </Col>
            
        </Row>
        </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
    </Card>
  );
};

export default EmployeeListView;
