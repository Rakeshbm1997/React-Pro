// EmployeeList.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent'; 
import jsonData from './EmployeeData.json'; 

const EmployeeList = () => {
  return (
    <Container>
      <Row>
        {jsonData.map((employee, index) => (
          <Col key={index} xs={12} md={3}>
            <CardComponent data={employee} />
          </Col>
        ))}
      </Row>
    </Container>
  ); 
};

export default EmployeeList;
