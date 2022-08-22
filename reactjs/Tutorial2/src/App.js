import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
function App() {
  return (
    <Container className='bg-drak text-light p-5'>
        <Row className='justify-content-center'>
            <Col md={10}>
                <h1>Hello World</h1>
            </Col>
        </Row>

    </Container>
  )
}

export default App