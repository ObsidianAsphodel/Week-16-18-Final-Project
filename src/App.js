import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Play from "./Pages/Play";

function App() {
  let component 
  switch(window.location){
    case '/':
      component = <App/>
      break;
    case '/about':
      component = <About/>
      break;
    case '/play':
      component = <Play/>
      break;
    case '/contact':
      component = <Contact/>
      break;
  }
  return (
    <>
      <div>
        <Navbar/>
        {component}
        <Container className="container-fluid text-white text-center p-3">
          {/* Routes - container for all the paths the router can take
             Route - a path that opens up into a new page */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<Play />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </>
  );
}

export default App;
