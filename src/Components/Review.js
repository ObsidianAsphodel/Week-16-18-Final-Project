import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
const Review = () => {
    const [review, setReview] = useState([]);
  return (
    <>
        <Container>
            <label>Review: </label>
            <input placeholder='leave a review!' size={30} id='reviewInput' value={review}/>
            <Button className='btn btn-success' onClick={(e) =>{
                e.preventDefault();
                setReview(e.target.value);
                reviewInput.value('');
            }}>Submit</Button>
        </Container>
    </>
  )
}
export default Review