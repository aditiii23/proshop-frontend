import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import Rating from "./Rating"

const Product = ({ products }) => {
  var productID = products._id
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/product/${productID}`}>
        <Card.Img src={products.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${productID}`}>
          <Card.Title as="div">
            <strong>{products.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={products.rating}
            text={`${products.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${products.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
