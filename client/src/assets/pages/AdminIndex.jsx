import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { Nav } from 'react-bootstrap';

function AdminIndex() {
  return (
    <div>
      <Container>
        <div className='row'>
          <div className='col-3'>
            <Nav defaultActiveKey='/home' className='flex-column '>
              <Nav.Link href='/admin' active className='text-success'>
                productList
              </Nav.Link>
              <Nav.Link eventKey='link-1' className='text-success'>
                orders
              </Nav.Link>
              <Nav.Link eventKey='link-2' className='text-success'>
                Link
              </Nav.Link>
              <Nav.Link eventKey='link-2' className='text-success'>
                income analysis
              </Nav.Link>
            </Nav>
          </div>
          <div className='col-9'>
            <Button className='btn btn-primary'>
              <a href='/admin/productList/uploadProduct'>Add new product</a>
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Order</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {products.map((product, index) => ( */}
                <tr>
                  <td>ID</td>
                  <td>productName</td>
                  <td>type</td>
                  <td>order</td>
                  <td>price</td>
                  <td>
                    <FiEdit2 />
                    <MdOutlineDeleteForever />
                  </td>
                </tr>
                {/* ))} */}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AdminIndex;
