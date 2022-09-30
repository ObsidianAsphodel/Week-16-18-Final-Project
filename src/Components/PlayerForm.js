import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const playerForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formPlayerName">
        <Form.Label>Player Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Player Name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default playerForm;