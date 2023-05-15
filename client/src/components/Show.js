import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { openCode } from '../api/qrcode';
import { useParams } from 'react-router-dom';

function Show(props) {

  const {id} = useParams();

  const [code, setCode] = useState();
  const fetchCode = async () => {
    const data = await openCode(id);
    console.log(data.data)
    // setCode(data.data);
  }
  const [modalShow, setModalShow] = useState(true);

useEffect(() => {
  fetchCode();
}, [])

const handleModalShow = () => {
  setModalShow(true);
};
  return (
    <div>
      <Modal
        show={modalShow}
        
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{code}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button >Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Show