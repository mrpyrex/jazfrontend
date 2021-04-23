import Link from "next/link";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Banner from "../../components/Banner";
import Meta from "../../components/Meta";
import Moment from "react-moment";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8000/api/blog/");
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const index = ({ posts }) => {
  return (
    <div id="blog">
      <Meta title="Cakes & More By Jazmyn | Blog" />
      <Banner title="Blog" />
      <Container>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} md={6} className="post">
              <Card className="mb-4">
                <Row>
                  <Col md={4} className="post-img">
                    <Image src={post.image} fluid />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title as="h2">{post.title}</Card.Title>
                      <Card.Text>
                        {post.content.length > 121
                          ? post.content.substring(0, 120) + "..."
                          : post.content}
                      </Card.Text>
                      <Card.Text>
                        <div className="d-flex justify-content-between">
                          <p>
                            {post.author.charAt(0).toUpperCase() +
                              post.author.slice(1)}
                          </p>
                          <small className="text-muted">
                            <Moment format="D MMM YYYY">
                              {post.created_at}
                            </Moment>
                          </small>
                        </div>
                      </Card.Text>
                      <Card.Text>
                        <Link href={`/blog/${post.slug}`}>
                          <a className="btn">Read More</a>
                        </Link>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default index;
