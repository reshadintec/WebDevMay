import React, { useEffect, useState } from 'react'
// import bootstrap components
import { Badge, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState([])
    const [movieTrailer, setMovieTrailer] = useState('')
    //https://api.themoviedb.org/3/movie/616037/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
    // https://api.themoviedb.org/3/movie/616037?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
    const { movie_id } = useParams()
    // async func 
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetail(data)
            })
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
            .then(response => response.json())
            .then(data=>{
                setMovieTrailer(data.results[0].key)
            } )
            
    }, [movie_id])

    
    return (
        <Container className="main-container p-5" fluid={true}>
            <Row>
                <Col md={4} className="p-4">
                <div className="p-5 bg-primary text-white movie-img rounded-0" style={{ 'background': `url(https://image.tmdb.org/t/p/w500${movieDetail.poster_path})` }}>
            </div>
                </Col>
                <Col md={4}>
                <h1 className='text-light overview-title'>Overview</h1>
                    <ListGroup>
                        <ListGroup.Item className=" bg-none text-light border-0 py-1 overview-text">
                             <p className='d-inline  py-1'>
                                {movieDetail.overview}
                            </p>
                        </ListGroup.Item>
                        <ListGroup>
                        <ListGroup.Item className="bg-none text-light border-0 py-1 ">
                            <Badge bg="warning" text="dark" className="w-100 rounded-0 text-start">ImDB Score: <p className='bg-white rounded-0 d-inline px-2 py-1'>
                                {Math.floor(movieDetail.vote_average)}
                            </p></Badge>
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-none text-light border-0 py-1">
                            <Badge bg="warning" className="w-100 rounded-0 text-start" text="dark">Movie Language: <p className='bg-white d-inline rounded-0 px-2 py-1'>{
                                movieDetail.original_language !== undefined ?
                                    movieDetail.original_language.toUpperCase()
                                    :
                                    ''
                            }</p></Badge>
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-none text-light border-0 py-1">
                            <Badge bg="warning" className="w-100 rounded-0 text-start" text="dark">Category: </Badge>
                            <ListGroup>
                                {
                                    movieDetail.genres !== undefined ?
                                        movieDetail.genres.map((cat, index) => (
                                            <ListGroup.Item className="rounded-0 py-0" key={cat.id}>{cat.name}</ListGroup.Item>
                                        )) :
                                        ''
                                }
                            </ListGroup>

                        </ListGroup.Item>

                    </ListGroup>
                        <ListGroupItem className="bg-none text-light border-0 my-5 ">
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movieTrailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={4} className="p-4">
                </Col>
            </Row>
            
        </Container>
    )
}

export default MovieDetail