import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const PlayerForm = () => {
  const [name, setName] = useState('');
  const postName = (name) => {
    // sends a post request to the mockAPI using the name
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formPlayerName">
        <Form.Label>Player Name: </Form.Label>
        <Form.Control type="text" placeholder="Enter Player Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
      </Form.Group>
    </Form>
  );
}

export default PlayerForm;