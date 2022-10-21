import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';

import "./App.css";



function App() {
    const [githubData, setGithubData] = useState([]);
    const [githubUser, setGithubUser] = useState("tmcw");
    const fetchData = () => {
        return fetch(`https://api.github.com/users/${githubUser}`)
            .then((response) => response.json())
            .then((data) => setGithubData(data));
    };
    useEffect(() => {
        fetchData();
    }, []);

    console.log(githubData);
    const handleChange = (e) => {
        setGithubUser(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h1 className="title">Github Favorite Users</h1>
            <div className="search-field">
                <form onSubmit={handleSubmit}>
                    {/* <input type="text" placeholder="Search Github Users" name="s" /> */}
                    <input type="text" placeholder="Search for User" onChange={handleChange} className="input_search" />
                    <button onClick={fetchData} className="search_button">Search Github</button>
                </form>
            </div>
            {/* Displaying the user */}
            <div className="user-card">
                <Card className="m-5" style={{ width: "20rem" }}>
                    <Card.Img className="avatar d-inline-block" variant="top" src={githubData.avatar_url} />
                    <Card.Body className="text-center">
                        <Card.Title>{githubData.name}</Card.Title>
                        <Badge bg="primary" className="custom-badge" >Location:</Badge><h6>{githubData.location}</h6>
                        <Badge bg="success" className="custom-badge" >Number of Followers:</Badge><h6>{githubData.followers}</h6>
                        <Badge bg="info" className="custom-badge" >Website / Blog</Badge><h6>{githubData.blog}</h6>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default App;
