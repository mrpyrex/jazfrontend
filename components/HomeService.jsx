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
                    From Engagement cakes to themed wedding cakes, we got you
                    covered
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
                    There's no complete day without a birthday cake as everyday
                    is someone's birthday!
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
                    Whether it's just for you alone or with the entire family
                    and friends, cupcakes are just perfect for that sitout.
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
                    If you love snacks, we make the best small chops and snacks
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
                    We can take the hassle from you and make your event perfect
                    no matter your budget
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
                  <p>We deliver same day anywhere in Akwa Ibom state</p>
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
