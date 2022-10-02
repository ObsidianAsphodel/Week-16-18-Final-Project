import React from 'react'
import  Row  from 'react-bootstrap/Row';
import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';
import Play from './Play';
import Rock from '../Images/hand_rock.png';
import Paper from '../Images/hand_paper.png';
import Scissors from '../Images/hand_scissors.png';
//allows you to Navigate between components/pages
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
    <Container>
      <div>
        <h1>Rock Paper Scissors</h1>
        <Row>
          <img src={Rock} alt='rock' className='img'/>
          <img src={Paper} alt='rock' className='img'/>
          <img src={Scissors} alt='rock' className='img'/>
        </Row>
      </div>
      <div>
        <h2>Press PLAY to start the game</h2>  
      </div>
      <Button onClick={(e) => {
        e.preventDefault();
        console.log('clicked');
        {navigate('/play')};
      }}>PLAY</Button> 
    </Container>
    </>
  )
}

export default Home