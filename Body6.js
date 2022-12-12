import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
function Body6() {
  return (
    <div className='body-section6'>
         <Container>
             <Row className='row'>
                 <Col lg={6}>
                  <div className='b6-contentbox'>
                     <h1 className='text-capitalize text-light'>golden sunrise</h1>
                     <br></br>
                     <p className='text-center text-light'>This photo was taken during sunrise
                          in Bagan, Myanmar</p>
                          <br></br>
                         <div className='text-center'>
                         <a className='b6-view' href='#'>VIEW MORE</a>
                         </div>
                  </div>
                 </Col>
             </Row>
         </Container>
    </div>
  )
}

export default Body6