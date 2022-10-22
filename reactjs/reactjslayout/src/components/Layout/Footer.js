import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsTwitch, BsTwitter } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

function Footer({ searchResultHandler,inputHandler }) {
  const x = useNavigate();
    const RedirectToHome =(e)=>{
        if(e.key==='Enter'){
            return x('/')
        }
    }
  return (
    <Container className='footer-container text-light py-4 px-5' fluid={true}>
      <Row>
        <Col md={4}>
          <h6>All Rigths Reserved</h6>
        </Col>
        <Col md={4}>
        <Link to={'/#social'}><BsFacebook fill='white' className="display-6 bg-primary p-2 rounded-1 mx-2" /></Link>
        <Link to={'/#social'}><BsInstagram fill='white' className="display-6 bg-primary p-2 rounded-1 mx-2" /></Link>
        <Link to={'/#social'}><BsTwitch fill='white' className="display-6 bg-primary p-2 rounded-1 mx-2" /></Link>
        <Link to={'/#social'}><BsTwitter fill='white' className="display-6 bg-primary p-2 rounded-1 mx-2" /></Link>
        </Col>
        <Col md={4}>
        <div className="d-flex">
                    <Form.Control
                        onChange={inputHandler}
                            type="search"
                            onKeyDown={RedirectToHome}
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </div>
        </Col>
        
      </Row>
    </Container>
  )
}

export default Footer
