import "./styles/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiFillFacebook,AiFillInstagram,AiFillTwitter } from "react-icons/ai";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App(){
    return (
    <Router>
    {/* Navigation Part */}

    <Navbar collapseOnSelect expand="lg" variant="light" className="custom-nav">
      <Container>
        <Navbar.Brand href="#home"><img src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/yumma_logo.png" width={"200px"} alt="My Logo" className="d-inline-block align-top"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            
            <Nav.Link href="https://facebook.com" className="icons"><AiFillFacebook/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* End of Navigation */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
    );
}

export default App;