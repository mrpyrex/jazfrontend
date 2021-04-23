import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

const Showcase = () => {
  return (
    <Jumbotron>
      <Container>
        <div className="showcase-text">
          <h1 className="display-2">Welcome</h1>
          <p>The home of Sweetness like you've never known!</p>
          <Link href="/contact">
            <a className="btn mr-2">Order Now</a>
          </Link>
          <Link href="/about">
            <a className="btn ml-2">Learn More</a>
          </Link>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Showcase;
