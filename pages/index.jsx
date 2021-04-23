import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";
import HomeMenu from "../components/HomeMenu";
import Chef from "../components/Chef";
import HomeService from "../components/HomeService";
import Showcase from "../components/Showcase";

const index = () => {
  return (
    <>
      <header>
        <Showcase />
      </header>
      {/* <div>
        <Carousel indicators={false} controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/j1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Birthday Cakes</h3>
              <p>Because Evetyday is someone's Birthday!</p>
              <Link href="/shop">
                <a className="btn mb-md-0 px-5">Order Now</a>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/j1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Birthday Cakes</h3>
              <p>Because Evetyday is someone's Birthday!</p>
              <Link href="/shop">
                <a className="btn mb-md-0 px-5">Order Now</a>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/j1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Birthday Cakes</h3>
              <p>Because Evetyday is someone's Birthday!</p>
              <Link href="/shop">
                <a className="btn mb-md-0 px-5">Order Now</a>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}

      <section className="home-about" id="home-about">
        <Container>
          <Row className="align-items-md-center">
            <Col
              md={6}
              className="text-center text-md-left"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
            >
              <div className="section-heading mb-3">
                <h4>Discover</h4>
                <h2 className="display-3">Our Story</h2>
              </div>
              <p>
                We are all about quality and freshness with a taste that leaves
                a lasting impression on your taste buds. We pour out all the
                love in our hearts into making every of our product.
              </p>
              <Link href="/about">
                <a className="btn mt-4 mb-5 mb-md-0">Learn More</a>
              </Link>
            </Col>
            <Col md={6} data-aos="fade-left">
              <Image src="/img/baker.jpg" alt="Jazmyn Umoren" fluid />
            </Col>
          </Row>
        </Container>
      </section>

      <HomeService />
      <HomeMenu />
      <Chef />
    </>
  );
};

export default index;
