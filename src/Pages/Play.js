import Container  from 'react-bootstrap/Container';
import PlayerForm from '../Components/PlayerForm';
import RockPaperScissors from '../Components/RockPaperScissors';
import  Button  from 'react-bootstrap/Button';

const Play = () => {

  return (
    <>
    <Container className="text-white m-3">
      <div>
            <PlayerForm/>
            <RockPaperScissors/>
            <Button variant="primary" type="submit" onClick={(e) => {
              e.preventDefault();
              console.log(<PlayerForm name/>);
            }}>Submit</Button>
      </div>
    </Container>
    </>
  )
}
export default Play;
