import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselCustom.css";
import classes from "./CarouselCustom.module.css";

function CarouselCustom() {
  const divStyle = {
    color: "blue",
    backgroundImage: "url(images/book1.jpg)",
  };

  return (
    <Carousel>
      <Carousel.Item>
        <div className={classes.slideImage} style={divStyle}></div>
        {/* <img
          className="d-block w-100"
          src="images/book1.jpg"
          alt="Second slide"
        /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/book2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/book3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/book4.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Forth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCustom;

/*

*/
