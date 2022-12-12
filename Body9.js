import React, { useState } from 'react'
import { Button, Col, Container, FormControl, Row } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
function Body9() {
//   let changing=()=>{
//       var inputvalue=document.getElementById('forminput').value;
//       if (inputvalue.length==0) {
//        alert('mailrequired');
//       } else {
//         alert('successfully added');
//       }
//   }
//   let mailcheck=()=>{
//     var mail=document.getElementById('forminput').value;
//     var res=document.getElementById('result');
//     if (!mail.match(/^([a-z0-9_.])+\@([a-z])+\.([a-z])+$/)) {
//       res.innerHTML="please enter valid mail id";
//       res.classList.add('green');
//     } 
//     else{
//       res.innerHTML="ok";
//       res.classList.add('red');;
//     }
// }
  

  return (
    <div className='base-section9' id='register'>
        <Container>
            <Row>
                <Col lg={4} sm={6}>
                <div className='b9-contentbox'>
                   <h1 className='text-light text-center text-capitalize'>Travel<br></br> With Us</h1>
                </div>
                </Col>

                <Col className='center-col' lg={4} sm={6}>
                <div className='b9-para'>
                   <p className='text-light'>Get amazing videos, travel tips, and pictures of the world’s 
                       most beautiful and far-flung places, plus special offers.</p>
                </div>
                </Col>

                <Col lg={4}>
                <span className='text-light'></span>
              <div className='form-box mt-4'>
                 <FormControl autoComplete='off' id='forminput'className='formcontrol' placeholder='Enter a valid email address'>
                 </FormControl>
                 <input className='submit' type="submit"></input>
              </div>
              </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Body9