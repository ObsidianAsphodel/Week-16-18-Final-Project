import React from 'react'
import { Button } from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap/Container';


const Home = () => {
  return (
    <>
    <Container>
      <div>
        <h1>Rock Paper Scissors</h1>
      </div>
      <div>
        <h2>Press PLAY to start the game</h2>  
      </div>
      <Button>PLAY</Button> 
    </Container>
    </>
  )
}

export default Home