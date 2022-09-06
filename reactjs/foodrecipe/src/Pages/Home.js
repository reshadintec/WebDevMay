import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { fetchData } from "../useFetch";

function Home() {

  const [meals, setMeals] = useState({});

  useEffect(() => {
    fetchData("https://www.themealdb.com/api/json/v1/1/random.php").then(
      (data) => {
        setMeals(data.meals[0]);
      }
    );
  }, []);
  return (
    <>
      <img
        className="d-flex w-100 hero-img"
        src="/images/menu-g375122060_1920.jpg"
      ></img>
      <Container className="my-5">
        <Row>
          <Col>
            <h2>Popular Recipes</h2>
          </Col>
          <Col>
            <Button className="buttons">View More</Button>
          </Col>
          <hr className="my-1" />
        </Row>
        {/* Displaying Cards */}
        <Row className="my-4">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={meals.strMealThumb} />
              <Card.Body>
                {meals !== undefined || meals !== null ? (
                  <div>
                    <h4>{meals.strMeal}</h4>
                  </div>
                ) : (
                  "Loading..."
                )}
                <Card.Title></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="card-buttons">View More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
              />
              <Card.Body>
                <Card.Title>Teriyaki Chicken Casserole</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="card-buttons">View More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
              />
              <Card.Body>
                <Card.Title>Teriyaki Chicken Casserole</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="card-buttons">View More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
              />
              <Card.Body>
                <Card.Title>Teriyaki Chicken Casserole</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="card-buttons">View More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
