import React from "react";
import { Container, Row } from "react-bootstrap";
import Rock from "../Images/hand_rock.png";
import Paper from "../Images/hand_paper.png";
import Scissors from "../Images/hand_scissors.png";

const Start = () => {};

const RockPaperScissors = () => {
  const Rock = (choice) => {
    choice = "Rock";
    <div>
      You chose {choice} + !
      <img src={Rock} alt="Rock" />
    </div>;

    console.log(choice);
    return choice;
  };
  const Paper = (choice) => {
    <div>
      You chose {choice} + !
      <img src={Paper} alt="Paper" />
    </div>;

    console.log(choice);
    return choice;
  };
  const Scissors = (choice) => {
    <div>
      You chose {choice} + !
      <img src={Scissors} alt="Scissors" />
    </div>;

    console.log(choice);
    return choice;
  };
  return (
    <>
      <Container>
        <div>
          <h1>Pick your choice!</h1>
        </div>
        <Row className="p-1 m-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              Rock("Rock");
            }}
          >
            Rock
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              Paper("Paper");
            }}
          >
            Paper
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              Scissors("Scissors");
            }}
          >
            Scissors
          </button>
        </Row>
      </Container>
    </>
  );
};

export default RockPaperScissors;
