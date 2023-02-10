import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function NavScroll() {
  return (
    <Navbar className="nav">
      <Container fluid className="nav">
        <Nav.Link href="/" className="links">Home</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
