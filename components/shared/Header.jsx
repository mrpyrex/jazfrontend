import { Navbar, Nav, Container, Image } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar bg="light" expand="sm" fixed="top">
      <Container>
        <Link href="/">
          <a className="navbar-brand">
            <Image src="/img/logo.svg" alt="Cakes and More By Jazmyn" />
          </a>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="toggle navigation"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
            <Link href="/gallery">
              <a className="nav-link">Gallery</a>
            </Link>
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
            <Link href="#">
              <a className="nav-link">Shop</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
