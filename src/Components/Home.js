import React from 'react';
import { useState } from 'react';
import { Button,Container,Modal } from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import { showhide } from '../action';
import { userDeails } from '../action';

 const Login = () => {

    const  dispatch = useDispatch();
    // const [show, setShow] = useState(false);
    const showForm = useSelector((state) => state.showAndhide.show);
    const records = useSelector((state) => state.showAndhide.userData);


    const handleClose = () => dispatch(showhide(false));
    const handleShow = () => dispatch(showhide(true));
    
    const {username,password}=records;
  
    const onInputchange =(event)=>{
        dispatch(userDeails({...records, [event.target.name]:event.target.value}))
    }
      
   
    const  handleSubmit=(event)=>{ 
    event.preventDefault();
    dispatch(showhide(false));
    console.log(records)
    }

    return (
      <>
     <Container>
  
     </Container>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>

        <Modal show={showForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form onSubmit={handleSubmit}>
                  <label>username:
                      <input type="text" name="username" value={username} onChange={onInputchange} />
                  </label>

                  <label>password:
                      <input type="password" name="password" value={password} onChange={onInputchange}/>
                  </label><br/>

                  <input type="submit" value= "submit" />
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default Login;
  
  