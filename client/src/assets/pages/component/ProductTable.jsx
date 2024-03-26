import React from 'react';
import { Table } from 'react-bootstrap';
const backendUrl = 'https://petslove-mern.onrender.com';

function ProductTable({ images }) {
  return (
    <>
      <h2 className='text-center mt-5'>Product image</h2>
      <div>
        <div className='imageGrid'>
          {images.map(({ image, _id }) => (
            <div key={_id} className='image__item'>
              <img src={image.filepath} alt={`${_id} product Image`} />
            </div>
          ))}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>

              <th>Name</th>
              <th>Type</th>
              <th>Order</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </>
  );
}

export default ProductTable;
