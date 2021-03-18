
import React from 'react'
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStarRating from "react-star-ratings-component";
import {Link} from 'react-router-dom'

const MovieCard=({movie})=> {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Img variant="top" src={movie.Poster} />
            {/* <ReactStarRating
                 name="rate" 
                 starCount={5}
                 value={movie.rate} /> */}
                <ReactStarRating
                    numberOfStar={5}
                    numberOfSelectedStar={movie.rate}
                    colorFilledStar="red"
                    colorEmptyStar="black"
                    starSize="20px"
                    spaceBetweenStar="10px"
                    disableOnSelect={false}
                //   onSelectStar={movie.rate}
                />
            </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard;
