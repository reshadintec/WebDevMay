import React, { useEffect, useState } from 'react'
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState([])
    // https://api.themoviedb.org/3/movie/616037?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
    const { movie_id } = useParams()
    // async func 
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetail(data)
            })
    }, [])
    return (
        <Container className='bg-dark p-0' fluid={true}>
            <div className="p-5 bg-primary text-white movie-img " style={{'background':`url(https://image.tmdb.org/t/p/w500${movieDetail.poster_path})`}}>
                <h1 className='text-center movie-title'>{movieDetail.original_title}</h1>
            </div>
            <Row className='p-0 m-0'>
                <Col md={3} className="p-3">
                <ListGroup>
                    <ListGroup.Item className='bg-none text-light'>
                    <Badge bg='warning' text='dark'> IMDB Score: <p className='bg-white rounded d-inline'>{Math.floor(movieDetail.vote_average)}</p></Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className='bg-none text-light'>
                    <Badge bg='warning' text='dark'> Movie Language: <p className='bg-white rounded d-inline'>{movieDetail.original_language!==undefined ?
                    movieDetail.original_language.toUpperCase()
                    :
                    ''
                    }</p></Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className='bg-none text-light'>
                    <Badge bg='warning' text='dark'> Category: <p className='bg-white rounded d-inline'>{}</p></Badge>
                    </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetail