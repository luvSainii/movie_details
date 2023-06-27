import React, { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'
function Summary( props ) {
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`).then((result) => {
      result.json().then((resp) => {
        setData(resp)
      })
    })
  })
  return (
    data.map((element) => {
      return (
        <>
          <div className='container mt-3'>
            <div className="row d-flex justify-content-center align-items-center">
              {
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={element.show.image?.medium} />
                  <Card.Body>
                    <Card.Title>{element.show.name}</Card.Title>
                    <Card.Text>{element.show.summary}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{element.show.genres}</ListGroup.Item>
                    <ListGroup.Item>{element.show.language}</ListGroup.Item>
                    <ListGroup.Item>{element.show.premiered}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href={element.show.url}>Trailer</Card.Link>
                  </Card.Body>
                </Card>
              }
            </div>
          </div>
        </>
      )
    })
  );

}
export default Summary;