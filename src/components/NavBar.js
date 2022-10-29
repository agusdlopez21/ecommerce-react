import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
            <a href="/" class="logo" >Shoe<span>Brand</span></a>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>
              Home
          </Nav.Link>
          <Nav.Link as={Link} to='/category/sneakers'>Sneakers</Nav.Link>
          <Nav.Link as={Link} to='/category/Flip flops'>Flip flop</Nav.Link>
          <Nav.Link as={Link} to='/category/caps'>Caps</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;