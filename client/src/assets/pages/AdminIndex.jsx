import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { Nav } from 'react-bootstrap';

import { Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
//分兩邊
function AdminIndex() {
  return (
    <div>
      <Container>
        <h1>Admin</h1>
        <div className='row'>
          <div className='col-3'>
            <Nav defaultActiveKey='/home' className='flex-column '>
              <Nav.Link href='/admin/products' active className='text-success'>
                products
              </Nav.Link>
              <Nav.Link
                href='/admin/orders'
                eventKey='link-1'
                className='text-success'
              >
                orders
              </Nav.Link>

              <Nav.Link
                href='/admin/analysis'
                eventKey='link-2'
                className='text-success'
              >
                income analysis
              </Nav.Link>
            </Nav>
          </div>
          <div className='col-9'>
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AdminIndex;
