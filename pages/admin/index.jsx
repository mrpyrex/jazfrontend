import { Col, Container, DropdownButton, Dropdown, Row } from "react-bootstrap";
import React from "react";

const index = () => {
  return (
    <div className="admin">
      <header className="admin-header">
        <Container>
          <Row>
            <Col sm={9} className="d-flex align-items-center">
              <h3 className="pt-3">Admin Dashboard</h3>
            </Col>
            <Col sm={3}>
              <DropdownButton
                className="create pt-3"
                id="dropdown-item-button"
                title="Create Content"
              >
                <Dropdown.Item as="button">Add Post</Dropdown.Item>
                <Dropdown.Item as="button">Add User</Dropdown.Item>
                <Dropdown.Item as="button">Add Product</Dropdown.Item>
                <Dropdown.Item as="button">Add Cake To Gallery</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="admin-main">
        <Container>
          <Row>
            <Col sm={3} className="pb-3">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  Dashboard
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Posts
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Users
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Cakes
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Products
                </a>
              </div>
            </Col>
            <Col sm={9}></Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default index;
