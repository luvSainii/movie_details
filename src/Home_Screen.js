import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
function Home_Screen() {
    var [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all").then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    })

    return (

        <div className='container mt-3'>
            <div className="row d-flex justify-content-center align-items-center">
                {
                    data.map((element) => {
                        return (
                            <>
                                <Card style={{ width: '20rem',margin: '3rem' }}>
                                    <Card.Img variant="top" src={element.show.image?.medium} />
                                    <Card.Body>
                                        <Card.Title>{element.show.name}</Card.Title>
                                        <Link to="/Summary">
                                            <Button id="element.show.id" variant="primary">Summary</Button>
                                            </Link>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }
            </div>
        </div>


    );
}

export default Home_Screen;