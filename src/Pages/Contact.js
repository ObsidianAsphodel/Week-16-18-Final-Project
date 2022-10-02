import React from "react";
import  Container  from "react-bootstrap/Container";
import ApiForm from "../Components/ApiForm";

const Contact = () => {
  return (
    <Container className="container-fluid">
      <h1 className="text-center">Contact</h1>
      <div>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/terencedixon/" className='text-decoration-none'>LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/ObsidianAsphodel" className='text-decoration-none'>Github</a>
          </li>
        </ul>
        <div>
          <ApiForm/>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
