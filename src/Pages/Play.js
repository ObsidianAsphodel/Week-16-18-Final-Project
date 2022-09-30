import { useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import  Form  from 'react-bootstrap/Form';


const Play = () => {
  const [name, setPlayerName] = useState('');

  const handleChange = e => {
    setPlayerName(e.target.value);
    console.log('name is', e.target.value);
  }
  return (
    <>
    <Container className="text-white m-3">
    <Form>
      <Form.Group className="mb-3" controlId="formPlayerName">
        <Form.Label>Player Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Player Name" onChange={handleChange} value={name}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
    </Container>
    </>
  )
}
export default Play;
