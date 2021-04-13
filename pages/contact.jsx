import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Datetime from "react-datetime";
import { IconContext } from "react-icons";
import Banner from "../components/Banner";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { contact } from "../components/actions/contactActions";

const contactPage = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [event_date, handleChange] = useState(new Date());
  const [guest_count, setCount] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const addContact = useSelector((state) => state.addContact);
  const { error, loading } = addContact;

  let inputProps = {
    placeholder: "Select date and time",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      contact(
        first_name,
        last_name,
        email,
        phone,
        event_date,
        guest_count,
        message
      )
    );
  };

  return (
    <div id="contact">
      <Meta title="Cakes & More By Jazmyn | Contact Us" />
      <Banner title="Contact Us" />
      <Container>
        <div className="contact-title">
          <h2>Get In Touch</h2>
          <p>
            Do you want us to whip us a delicious custom menu for your event?
            Kindly connect with us by filling out our contact form
          </p>
        </div>
        <Row>
          <Col md={7}>
            <Card className="p-4">
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      required
                      placeholder="First Name"
                      type="text"
                      type="first_name"
                      value={first_name}
                      onChange={(e) => setFirst_name(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      required
                      placeholder="Last Name"
                      type="text"
                      type="last_name"
                      value={last_name}
                      onChange={(e) => setLast_name(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      placeholder="Email"
                      type="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      required
                      placeholder="Phone Number"
                      type="tel"
                      type="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Datetime
                      required
                      strictParsing={false}
                      inputProps={inputProps}
                      value={event_date}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      required
                      placeholder="Guest Count"
                      type="text"
                      type="guest_count"
                      value={guest_count}
                      onChange={(e) => setCount(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      required
                      placeholder="Message"
                      type="text"
                      as="textarea"
                      rows="10"
                      type="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Col>
                </Row>
                <Button
                  type="submit"
                  className="btn btn-block mt-2 mb-5 mb-md-0"
                  disabled={
                    !first_name.trim() ||
                    !last_name.trim() ||
                    !phone.trim() ||
                    !guest_count.trim() ||
                    !message.trim()
                  }
                >
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
          <Col md={4} className="offset-md-1">
            <div className="contact-details">
              <div className="contact-item">
                <h3>Address :</h3>
                <p>
                  Ikot Udoma Estate Road <br /> Eket, Akwa Ibom
                </p>
              </div>
              <div className="contact-item">
                <h5>
                  Phone : <a href="tel:+2347080230375">0708 023 0375</a>
                </h5>
                <h5>
                  Email :{" "}
                  <a href="mailto:info@cakesandchopsbyjazmyn.com">
                    info@cakesandchopsbyjazmyn.com
                  </a>
                </h5>
              </div>
              <div className="contact-item">
                <h3>Opening Hours :</h3>
                <p>8:00 AM – 6:00 PM</p>
                <p>Monday – Saturday</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default contactPage;
