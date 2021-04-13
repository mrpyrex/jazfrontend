import Link from "next/link";
import { Form, Col, Image, Container, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="container-fluid bg-grey py-5">
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <div className="logo-part">
                  <Image
                    src="/img/logo.svg"
                    alt="Cakes and More By Jazmyn"
                    className="w-50 logo-footer"
                  />

                  <div>
                    <FaMapMarkerAlt />
                    <address>
                      Ikot Udoma Estate Road, <br /> Eket, Akwa Ibom
                    </address>
                  </div>
                </div>
              </Col>
              <Col md={6} className="px-4">
                <h6> About Us</h6>
                <Link href="/about">
                  <a className="btn-footer"> More Info </a>
                </Link>
                <br />
                <Link href="/contact">
                  <a className="btn-footer"> Contact Us</a>
                </Link>
                <Row>
                  <div className="pt-3">
                    {new Date().getFullYear()} &copy; Jazmyn Confectioneries.
                    All Rights Reserved
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 px-4">
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        {" "}
                        <a href="#"> Home</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> About</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> Gallery</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> Contact</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> Blog</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> Shop</a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Col md={6}>
                <h6> Newsletter</h6>
                <IconContext.Provider
                  value={{ className: "react-icons", size: "2em" }}
                >
                  <a href="#">
                    {" "}
                    <FaFacebook aria-hidden="true" />{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <FaInstagram aria-hidden="true" />{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <FaPinterest aria-hidden="true" />{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <FaTwitter aria-hidden="true" />{" "}
                  </a>
                </IconContext.Provider>
                <Form className="form-footer my-3">
                  <input type="text" placeholder="email ..." name="subcribe" />
                  <input type="button" value="Go" />
                </Form>
                <p>Subcribe to get delicous treats</p>
                {/* <p> This is where the </p> */}
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
