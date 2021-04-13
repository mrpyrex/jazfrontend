import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

const Showcase = () => {
  return (
    <Jumbotron>
      <Container>
        <div className="showcase-text">
          <h1 className="display-2">Welcome</h1>
          <p>The Home Of Sweetness Like You've Never Known!</p>
          <Link href="/about">
            <a className="btn mr-2">Learn More</a>
          </Link>
          <Link href="/contact">
            <a className="btn ml-2">Order Now</a>
          </Link>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Showcase;
