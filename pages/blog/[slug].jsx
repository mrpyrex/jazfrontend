import Link from "next/link";
import Moment from "react-moment";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FiClock, FiUser } from "react-icons/fi";
import Meta from "../../components/Meta";
import { IconContext } from "react-icons";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/api/blog/");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch(
    `https://protected-anchorage-64109.herokuapp.com/api/blog/${slug}`
  );
  const data = await res.json();

  return {
    props: { post: data },
  };
};

const postDetails = ({ post }) => {
  return (
    <div id="post">
      <Meta title={post.title} description={post.content} />
      <Container>
        <Row>
          <Col md={9}>
            <article>
              <div className="section-heading my-5 text-center ">
                <h2 className="display-2">{post.title}</h2>
                <FiClock />
                <Moment fromNow>{post.created_at}</Moment>
                <FiUser /> {post.author}
                {post.category}
              </div>
              <div className="post-image">
                <Image src={post.image} fluid alt={post.title} />
              </div>
              <div className="content mt-3">
                <p>{post.content}</p>
              </div>
            </article>
            <div className="post-footer my-3 text-center">
              <div className="author">
                <div className="avatar">
                  <Image
                    rounded
                    src={post.author.pic}
                    fluid
                    alt={post.author.name}
                  />
                </div>
                <div className="author-info py-2">
                  <h3>
                    {post.author.charAt(0).toUpperCase() + post.author.slice(1)}
                  </h3>
                  <div className="author-social">
                    <Link href="#">
                      <a target="_blank">
                        <FiUser />
                      </a>
                    </Link>
                    <Link href="#">
                      <a target="_blank">
                        <FiClock />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default postDetails;
