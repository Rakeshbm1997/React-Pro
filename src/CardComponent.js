// CardComponent.js
import React ,{ useState } from 'react';
import { Card, Container,Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisVertical,faPencil,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import EditModalComponent from './EditModalComponent'




const CardComponent = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const { name, designation, img } = data;


 

  return (
    <Container fluid className='card-container'>
        <Card border="#f7f7f7"  style={{ margin: '1rem', padding: '2rem', maxWidth: '20rem', maxHeight:'20rem' , whiteSpace: 'pre-wrap'  }} className="mb-4 mt-5 " >

      <div className="text-center"> 
      <Card.Img  src={img}  className="img-fluid mt-3"  style={{ borderRadius: "50%", maxHeight: "100px", maxWidth: "80%" }}  />
      </div>
    
      
    
      <Dropdown className="position-absolute top-0 end-0 m-2">
  <Dropdown.Toggle
    variant="text-dark"
    id="dropdown-basic"
    size="sm"
    bsPrefix
    className="btn-icon-only"
  >
    <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="" onClick={handleShow} ><i><FontAwesomeIcon icon={faPencil} className='me-3' /></i>EDIT</Dropdown.Item>
    <Dropdown.Item href=""><i><FontAwesomeIcon icon={faTrashCan} className='me-3'/></i>DELETE</Dropdown.Item>
    <EditModalComponent showModal={showModal} handleClose={handleClose} />
   
  </Dropdown.Menu>
</Dropdown>
    
          
       
      <Card.Body>
      
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-center">{designation}</Card.Subtitle>
        
      </Card.Body>
    </Card>
    </Container>

    
    
    
  );
};

export default CardComponent;
