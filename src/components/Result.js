import React from 'react'
import { Container } from 'react-bootstrap'

function Result(props) {
  return (
    <div>
     <Container>
         <div className='resultbox'>
         <div className='maincar'>
      <div className='cardsection bg-light'>
         <div className='dummy'>
            
         </div>
         <br></br>
         <p>lorein only the specific components that yo
            u use, which can significantly reduce 
            the amount of code you end up sending to the client.</p>
            <div className='more'>
               <a href='#'>more</a>
            </div>
            <p id='result'>
               {props.data}
            </p>
       </div>
      </div>
      
    </div>
     </Container>

    </div>
  )
}

export default Result