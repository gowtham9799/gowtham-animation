import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import image1 from './reactimages/pexels-pixabay-533923.jpg'
import image2 from './reactimages/pexels-pixabay-533923.jpg'
import image3 from './reactimages/pexels-pixabay-533923.jpg'
import image4 from './reactimages/pexels-pixabay-533923.jpg'
import image5 from './reactimages/pexels-pixabay-533923.jpg'
import image6 from './reactimages/pexels-pixabay-533923.jpg'
function Body7() {
  return (
    <div className='body-section7'>
      <Container>
      <Row>
          <Col lg={2} sm={6} className="column">
            <div className='box-1'>
                <div className='image-1'>
                   <img src={image1}></img>
                </div>
                <br></br>
                <p className='text-uppercase para'>THE HIGHEST RESIDENTIAL BUILDING IN ASIA
                  PHOTO BY  ALBERT DROS</p>
            </div>
          </Col>

          <Col lg={2} sm={6} className="column">
          <div className='box-1'>
                <div className='image-1'>
                <img src={image2}></img>
                </div>
                <br></br>
                <p className='text-uppercase para'>I WAS DESPERATE TO COME BACK TO MORAINE LAKE
PHOTO BY  DAVE VALLER</p>
            </div>
          </Col>

          <Col lg={2} sm={6} className="column">
          <div className='box-1'>
                <div className='image-1'>
                <img src={image3}></img>
                </div>
                <br></br>
                <p className='text-uppercase para'>THE HIGHEST RESIDENTIAL BUILDING IN ASIA
                  PHOTO BY  ALBERT DROS</p>
            </div>
          
          </Col>

          <Col lg={2} sm={6} className="column">
          <div className='box-1'>
                <div className='image-1'>
                <img src={image4}></img>
                </div>
                <br></br>
                <p className='text-uppercase para'>THE HIGHEST RESIDENTIAL BUILDING IN ASIA
                  PHOTO BY  ALBERT DROS</p>
            </div>
          </Col>

          <Col lg={2} sm={6} className="column">
          <div className='box-1'>
                <div className='image-1'>
                <img src={image5}></img>
                </div>
                <br></br>
                <p className='text-uppercase para'>THE HIGHEST RESIDENTIAL BUILDING IN ASIA
                  PHOTO BY  ALBERT DROS</p>
            </div>
          </Col>

          <Col lg={2} sm={6} className="column">
          <div className='box-1'>
                <div className='image-1'>
                <img src={image6}></img> 
                </div>
                <br></br>
                <p className='text-uppercase para'>THE HIGHEST RESIDENTIAL BUILDING IN ASIA
                  PHOTO BY  ALBERT DROS</p>
            </div>
          </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Body7