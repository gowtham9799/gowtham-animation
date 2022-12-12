import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Body2() {
  return (
    <div className='body-section2'>
      <Container>
        <Row>
          <Col lg={6} sm={6}>
            <div className='b2-contentbox'>
              <h1 className='text-light'>winners 2018</h1>
            </div>
          </Col>
          <Col lg={6} sm={6}>
            <div className='b2-contentbox-2'>
              <h1 className='text-light'>National Geographic Nature Photographer Of The Year</h1>
              <br></br>
              <p className='text-light'>Each Week, Our Editors Choose Stunning Photos Submitted By
                Members Of Your Shot, National Geographic's Photo Community.</p>
              <br></br>
              <a className='readmore' href='#'>read more</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Body2