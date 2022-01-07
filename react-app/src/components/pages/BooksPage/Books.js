import React from "react";
import { Col, Row, Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button'

import classes from "./Books.module.css";

function Books() {
  return (
    <section className={classes.bookSection}>
      <div className={classes.bookContainer}>
        <Card className="shadow p-3 m-5 bg-white rounded">
          <Row>
            <Col sm={4}>
              <Card className="p-3 bg-white rounded">
                <Card.Img variant="top" src="images/book1.jpg"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={8}>
              <Card className="p-3 bg-white rounded">
              <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className={classes.line}></div>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className={classes.line}></div>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </section>
  );
}

export default Books;
