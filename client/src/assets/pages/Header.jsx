import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { CiUser, CiHeart } from 'react-icons/ci';
import Logo from '/images/Logo.png';
import { RiAdminLine } from 'react-icons/ri';

function Header() {
  return (
    <div className='header '>
      <Container fluid>
        <Navbar variant='light' expand='lg'>
          <Navbar.Brand as={Link} to='/' className='d-flex align-items-center '>
            <img src={Logo} alt='logo' className='logo' />
            <h1 className='logoH1 animate__animated animate__backInLeft animate__slow d-sm-none d-md-block'>
              Pet's Love
            </h1>
          </Navbar.Brand>{' '}
          <Navbar.Toggle aria-controls='navbarNav' />
          <Navbar.Collapse id='navbarNav' className='justify-content-end'>
            <Nav className='navLinks'>
              <Nav.Link as={Link} to='/shop'>
                Shop
              </Nav.Link>

              <Nav.Link as={Link} to='/users'>
                <CiUser />
              </Nav.Link>
              <Nav.Link as={Link} to='/blog'>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to='/admin'>
                <RiAdminLine />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
