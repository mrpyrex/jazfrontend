import React, { useState, useEffect, useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SunEditor, { buttonList } from "suneditor-react";

const PostForm = () => {
  return (
    <div className="post-create py-4 my-4">
      <Container>
        <h2>Add A Post</h2>
        <Row>
          <Col md={8}>
            <Form>
              <Form.Group controlId="postTitle">
                <Form.Label>Post Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" />
              </Form.Group>

              <SunEditor
                height="400"
                placeholder="Please type here..."
                setOptions={{
                  height: 200,
                  buttonList: [
                    ["undo", "redo"],
                    ["bold", "underline", "italic", "list"],
                    [
                      "blockquote",
                      "font",
                      "align",
                      "fontColor",
                      "fontSize",
                      "horizontalRule",
                      "paragraphStyle",
                    ],
                    ["table", "link", "image"],
                  ],
                }}
              />
              <Form.Group>
                <Form.File id="postImage" label="Add an image" />
              </Form.Group>
              <Button className="btn btn-block">Add Post</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostForm;
