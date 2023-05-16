import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { openCode } from '../api/qrcode';
import { useParams, useNavigate } from 'react-router-dom';

function Show(props) {
  const navigate = useNavigate();
  const {id} = useParams();

  const [code, setCode] = useState({
    title:'',
    url:''
  });
  const fetchCode = async () => {
    const data = await openCode(id);
    const {title, url} = data.data;
    setCode({title, url});
  }
  const [modalShow, setModalShow] = useState(true);


useEffect(() => {
  fetchCode();
}, [])

const handleModalShow = () => {
  setModalShow(true);
};

const handleClose = () => {
  navigate('/');
}


  return (
      <Modal
        show={modalShow}
        
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{code.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {code.url}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} >Close</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default Show