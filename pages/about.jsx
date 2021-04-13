import { Col, Container, Row, Card, Accordion } from "react-bootstrap";
import Banner from "../components/Banner";
import Meta from "../components/Meta";

const about = () => {
  return (
    <div className="about">
      <Meta title="Cakes & More By Jazmyn | About Us" />
      <Banner title="About Us" />
      <section className="pt-4">
        <Container>
          <Row>
            <Col md={6}>
              <p>
                At Cakes And More, we specialize in serving up delicious cakes
                and menus creating them from fresh ingredients sourced locally.
                You can be rest assured that out cakes and menus are handcrafted
                the moment you place your order.
              </p>

              <p>
                We harness the experience and expertise of our seasoned pastery
                chefs and decorators to bring life and color to your events
                without compromising the taste of our pastery products.
              </p>

              <p>
                We choose carefully, from the ingredients we use and the
                suppliers we select and to the people we hire.
              </p>

              <p>
                Whatever is your need, we have a cake for every celebration or
                that for the special someone.{" "}
              </p>
            </Col>
            <Col md={6}>Picture Goes Here</Col>
          </Row>
          <Row className="py-5">
            <Col md={6}>
              <h3 className="display-4 text-center text-md-left">
                We're Unique
              </h3>
            </Col>
            <Col md={6}>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h3>Simplicity</h3>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      By adopting simplistic design, we bring about balance and
                      harmony amongst visual elements of your event.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h3>Quality</h3>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Our philosophy combines baker minded approach with a deep
                      commitment to delivering fresh products all the time.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h3>Home Grown</h3>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Our products must be made from the freshest of
                      ingredients. That's why we source the ingredients locally
                      as much as we can.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <h3>Passonate</h3>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      Our passion is what drives us towards achiving the best
                      when we cater to your event
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="training d-flex justify-content-center align-items-center py-4">
        <Container>
          <div className="text-center">
            <h2 className="display-2">Training</h2>
            <p>Learn How to make pateries like a pro</p>
          </div>

          <Row>
            <Col md={4}>
              <Card className="bg-success text-white">
                <Card.Header>
                  <Card.Title>Basic</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Learn how to make different types of cakes and cookies. You
                    will also learn different mixing and piping techniques as
                    well as butter cream icing decoration.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>25,000</Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-warning text-white">
                <Card.Header>
                  <Card.Title>Basic</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Learn how to use sugar craft accessories and tools. You will
                    also learn how to make sugar paste, modelling paste, royal
                    icing and gum paste flower. You will learn how to create a
                    painting and dusting effect.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>25,000</Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-danger text-white">
                <Card.Header>
                  <Card.Title>Basic</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Improve on what you have learned in the basic class learn to
                    work with fondant, mixing of fondant and covering a cake
                    with fondant. Fondant fabric effect: draping, bowl, twist
                    and swag.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>25,000</Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default about;
