import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { userDeails } from '../action';
import { showhide } from '../action';
import axios from 'axios';

const Login = () => {

  let history = useHistory();
  const dispatch = useDispatch();
  // const [show, setShow] = useState(false);
  const showForm = useSelector((state) => state.showAndhide.show);
  const records = useSelector((state) => state.showAndhide.userData);

 
  const handleClose = () => dispatch(showhide(false));
  const handleShow = () => dispatch(showhide(true));

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const { username, password } = records;

  const onInputchange = (event) => {
    dispatch(userDeails({ ...records, [event.target.name]: event.target.value }))
  }

  const [Details, setDetails] = useState();

  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    axios.get('http://localhost:3008/user').then((response) => {
      setDetails(response.data);

    })
  };
  const onSubmit = () => {
 
    dispatch(showhide(false));
    if (records.username && records.password == Details.map((user) => user.username && user.password)) {
      getLocation();
      return history.push('/Dashboard');
    }
    else
    history.push('/Home');
   
  }

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

console.log(status)


  return (
    <>
      <Container>

      </Container>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pleases Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <label>username:
            <input type="text" name="username" value={username} onChange={onInputchange} />
          </label>

          <label>password:
            <input type="password" name="password" value={password} onChange={onInputchange} />
          </label><br />

          <Button varient="info" onClick={onSubmit}> Login</Button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
<div>
      <p>{status}</p>
  {lat && <p>Latitude: {lat}</p>}
  {lng && <p>Longitude: {lng}</p>}
</div>
    </>
  );
}
export default Login;