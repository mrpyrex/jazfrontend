import Link from "next/link";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <section className="error-area">
      <Container>
        <div className="error-inner">
          <div className="error-inner-text">
            <h3>404</h3>
            <h4>Oops! That page can’t be found</h4>
            <h5>Sorry, but it seems someone ate the cake on this page</h5>
            <Link href="/">
              <a className="btn">Go Back Home</a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default NotFound;
