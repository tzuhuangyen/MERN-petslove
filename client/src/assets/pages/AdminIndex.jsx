import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Container, Nav, Row, Col } from 'react-bootstrap';
//分兩邊
function AdminIndex() {
  const location = useLocation();

  return (
    <div>
      <Container fluid>
        <h1>Admin</h1>
        <Row>
          <Col sm={3}>
            <Nav className='flex-column'>
              <Nav.Item>
                <Link
                  to='/admin/products'
                  className={
                    location.pathname === '/admin/products'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                  style={{ color: 'black' }}
                >
                  Products
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  style={{ color: 'black' }}
                  to='/admin/orders'
                  className={
                    location.pathname === '/admin/orders'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  Orders
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  to='/admin/analysis'
                  className={
                    location.pathname === '/admin/analysis'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                  style={{ color: 'black' }}
                >
                  AdminAnalysis
                </Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Outlet />
            {/* context= {test} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminIndex;
