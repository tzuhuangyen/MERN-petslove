import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AdminProducts() {
  return (
    <div>
      <h1>Admin Product List</h1>
      <Container>
        <div className='col-9'>
          <Link
            as={Link}
            to='/admin/products/uploadProduct'
            className='btn btn-primary'
          >
            Add new product
          </Link>
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
      </Container>
    </div>
  );
}

export default AdminProducts;
