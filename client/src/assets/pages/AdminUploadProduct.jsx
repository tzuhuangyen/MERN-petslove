import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function AdminProduct() {
  const [file, setFile] = useState(null);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [order, setOrder] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('type', type);
    formData.append('order', order);
    try {
      const response = axios.post(
        'http://localhost:8080/admin/upload',
        formData
      );

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  //test upload
  //   const handleUpload = (e) => {
  //     console.log(file);
  //   };

  return (
    <div>
      <Container className='mt-5 mb-5'>
        <h1 className='text-center mb-5'>Add Product</h1>
        <Row className='justify-content-md-center'>
          <Col md={6}>
            <Form>
              <Form.Group controlId='formFile'>
                <Form.Label>choose image</Form.Label>
                <Form.Control
                  type='file'
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </Form.Group>
              <Form.Group controlId='productName'>
                <Form.Label>product name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='product name'
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='price'>
                <Form.Label>price</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='order'>
                <Form.Label>order</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='order'
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='type'>
                <Form.Label>type</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='type'
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='description'>
                <Form.Label>description</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Button variant='primary' type='submit' onClick={handleUpload}>
                submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminProduct;
