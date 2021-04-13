import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { Col, Container, Image, Row } from "react-bootstrap";

const Chef = () => {
  return (
    <section className="chef" id="chef">
      <Container>
        <Row className="chef-inner">
          <Col lg={3} md={6}>
            <div className="chef-text-item">
              <div className="main-title">
                <h4>Busy & Fingers</h4>
                <h2 className="display-3">Our Team</h2>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="chef-item">
              <div className="chef-img">
                <Image fluid src="/img/chef1.jpg" alt="team jazmyn" />
                <ul>
                  <IconContext.Provider
                    value={{ className: "react-icons", size: "2em" }}
                  >
                    <li>
                      <a href="#">
                        <FaFacebook aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPinterest />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                  </IconContext.Provider>
                </ul>
              </div>
              <a href="#">
                <h4>Jazmyn Umoren</h4>
              </a>
              <h5>Chief Baker</h5>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="chef-item">
              <div className="chef-img">
                <Image fluid src="/img/chef2.jpg" alt="team jazmyn" />
                <ul>
                  <IconContext.Provider
                    value={{
                      className: "react-icons",
                      size: "2em",
                      color: "#fff",
                    }}
                  >
                    <li>
                      <a href="#">
                        <FaFacebook aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPinterest />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                  </IconContext.Provider>
                </ul>
              </div>
              <a href="#">
                <h4>Jane Friday</h4>
              </a>
              <h5>Decorator</h5>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="chef-item">
              <div className="chef-img">
                <Image fluid src="/img/chef3.jpg" alt="team jazmyn" />
                <ul>
                  <IconContext.Provider
                    value={{ className: "react-icons", size: "2em" }}
                  >
                    <li>
                      <a href="#">
                        <FaFacebook aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPinterest />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                  </IconContext.Provider>
                </ul>
              </div>
              <a href="#">
                <h4>Favor Roberts</h4>
              </a>
              <h5>Cupcake Specialist</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Chef;
