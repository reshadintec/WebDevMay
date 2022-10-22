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
    fetchData("https://www.themealdb.com/api/json/v1/1/search.php?s=veg").then(
      (data) => {
        setMeals(data.meals);
        console.log(meals);
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
        {meals !== undefined || meals !== null
          ? meals.map((item) => (
                <Row>
                  <Col md={4}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={item.strMealThumb} />
                      <Card.Body>
                        <Card.Title>{item.strMeal}</Card.Title>
                        <Card.Text>{item.strInstructions}</Card.Text>
                        <Button className="card-buttons">View More</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
            ))
          : "Loading..."}
      </Container>
    </>
  );
}

export default Home;
