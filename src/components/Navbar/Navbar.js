import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function NavScroll() {
  return (
    <Navbar className="nav">
      <Link to="/" type="button">
        {' '}
        <FontAwesomeIcon icon={faAngleLeft} className="icon" />
      </Link>
      <Container fluid className="nav">
        <Nav.Link href="/" className="links">Home</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
