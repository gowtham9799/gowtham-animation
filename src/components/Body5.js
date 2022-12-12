import React from 'react'
import { Container } from 'react-bootstrap';
import image1 from './reactimages/pexels-tyler-lastovich-772803.jpg';
import image2 from './reactimages/pexels-pixabay-533923.jpg';
import image3 from './reactimages/pexels-francesco-ungaro-998657.jpg';
import image4 from './reactimages/pexels-nick-wehrli-5282269.jpg';
import image5 from './reactimages/pexels-tyler-lastovich-772803.jpg';
import image6 from './reactimages/pexels-irina-iriser-1086584.jpg';
function Body5() {
  return (
    <div className='body-section5'>
     
         <Container id='gallery'>
              <div className='imagegallery' width="50%">
                  <img src={image1} alt="image1" width="30%"></img>
                  <img src={image2} alt="image1" width="30%"></img>
                  <img src={image3} alt="image1" width="30%"></img>
                  <img src={image4} alt="image1" width="30%"></img>
                  <img src={image5} alt="image1" width="30%"></img>
                  <img src={image6} alt="image1" width="30%"></img>
            </div>
            <div className='buttonbox'>
               <a className='viewmore' href='#'>VIEW MORE</a>
            </div>
         </Container>
    </div>
  )
}

export default Body5