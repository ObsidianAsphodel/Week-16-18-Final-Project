import React from 'react'
import Container  from 'react-bootstrap/Container'

const About = () => {
  return (
    <Container>
      <div>
        <h1 className="text-center">About</h1>
      </div>
      <div>
        <h2 className='text-center'>Week 16-18 Final Project</h2>
        <p className="text-center fst-italic">
            The purpose of this project was putting together everything that we've learned in the past 18 week of our Promineo Tech Bootcamp.
          We used React.JS to create this project, along with React-Bootstrap and React-Router. This project, in particular, was a game of
          Rock-Paper-Scissors. 
        </p>
      </div>
    </Container>
  )
}

export default About