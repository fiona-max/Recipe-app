import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function NavBar() {
  return <>
    <Navbar bg="white">
      <Container>
        <Navbar.Brand href="#home" className="me-auto">Recipedia</Navbar.Brand>
        <Nav className="fw-bold">
          <Nav.Link href="#home" className="me-3 ms-3">Home</Nav.Link>
          <Nav.Link href="#features" className="me-3 ms-3">Recipe</Nav.Link>
          <Nav.Link href="#pricing" className="me-3 ms-3">About Us</Nav.Link>
          <Nav.Link href="#pricing" className="me-3 ms-3">Community</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
}
