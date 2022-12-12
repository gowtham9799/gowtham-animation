import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import bannerimage from './reactimages/pexels-irina-iriser-1086584.jpg';

function Body1() {
  return (
    <div className='body-section'>
      <Container>
        <Row>
          <Col lg={6} sm={6}>
          <div className='bannerimage-box'>
             <img className='bannerimage' src={bannerimage}></img>
          </div>
          </Col>

          <Col lg={6} sm={6}>
          <div className='bannercontent-box'>            
             <h1 className='text-light tittle'>spectacular photos of our world</h1>
             <br></br>
             <p className='text-justify text-light'>The 2018 Travel Photographer of the Year 
               contest is coming up. Here are some
                of our favorites from last year's competition.</p>
                <br></br>
                <a className='learnmore' href='#'>learn more</a>
          </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Body1