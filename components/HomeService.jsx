import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const HomeService = () => {
  return (
    <section className="home-service gray-service white-bg p-100">
      <Container>
        <div className="single-b-title">
          <h2 className="text-center display-3">Services We offer</h2>
        </div>
        <Row className="we-offer-inner">
          <Col lg={4}>
            <div className="s_we_item gray_s_item">
              <div className="media">
                <div className="d-flex">
                  <i className="flaticon-food-3"></i>
                </div>
                <div className="media-body">
                  <Link href="/about">
                    <a>
                      <h4>Wedding Cakes</h4>
                    </a>
                  </Link>
                  <p>
                    Lorem Ipsum is simply my text of the printing and Ipsum is
                    simply text of the Ipsum is simply.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="s_we_item gray_s_item">
              <div className="media">
                <div className="d-flex">
                  <i className="flaticon-food-6"></i>
                </div>
                <div className="media-body">
                  <Link href="/about">
                    <a>
                      {" "}
                      <h4>Birthday Cakes</h4>
                    </a>
                  </Link>
                  <p>
                    Lorem Ipsum is simply my text of the printing and Ipsum is
                    simply text of the Ipsum is simply.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="s_we_item gray_s_item">
              <div className="media">
                <div className="d-flex">
                  <i className="flaticon-food-5"></i>
                </div>
                <div className="media-body">
                  <Link href="/about">
                    <a>
                      <h4>Cup Cakes</h4>
                    </a>
                  </Link>
                  <p>
                    Lorem Ipsum is simply my text of the printing and Ipsum is
                    simply text of the Ipsum is simply.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="we-offer-inner">
          <Col lg={4}>
            <div className="s_we_item gray_s_item">
              <div className="media">
                <div className="d-flex">
                  <i className="flaticon-book"></i>
                </div>
                <div className="media-body">
                  <Link href="/about">
                    <a>
                      <h4>Tasty Chops</h4>
                    </a>
                  </Link>
                  <p>
                    Lorem Ipsum is simply my text of the printing and Ipsum is
                    simply text of the Ipsum is simply.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="s_we_item gray_s_item">
              <div className="media">
                <div className="d-flex">
                  <i className="flaticon-food-4"></i>
                </div>
                <div className="media-body">
                  <Link href="/about">
                    <a>
                      <h4>Event Planning</h4>
                    </a>
                  </Link>
                  <p>
                    Lorem Ipsum is simply my text of the printing and Ipsum is
                    simply text of the Ipsum is simply.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="s_we_item gray_s_item">
              <div className="media">
                <div className="d-flex">
                  <i className="flaticon-transport"></i>
                </div>
                <div className="media-body">
                  <Link href="/about">
                    <a>
                      <h4>Home Delivery</h4>
                    </a>
                  </Link>
                  <p>
                    Lorem Ipsum is simply my text of the printing and Ipsum is
                    simply text of the Ipsum is simply.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeService;
