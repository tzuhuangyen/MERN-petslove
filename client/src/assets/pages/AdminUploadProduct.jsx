import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { response } from 'express';

function AdminProduct() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState();
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [order, setOrder] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [backendUrl, setBackendUrl] = useState('');

  //获取后端配置信息
  useEffect(() => {
    axios
      .get('/api/config')
      .then((response) => {
        const backendUrl = response.data.backendUrl;
        setBackendUrl(backendUrl);
      })
      .catch((error) => console.error('Error fetching config:', error));
  }, []);

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('type', type);
    formData.append('order', order);
    try {
      axios
        .post(`${backendUrl}/admin/upload`, formData)
        .then((response) => {
          console.log(response.data);
          console.log(file);
        })
        .catch((error) => console.error('Error:', error));
    } catch (error) {
      console.error('Error:', error);
    }
  };
  //test uploadfs
  //   const handleUpload = (e) => {
  //     console.log(file);
  //   };
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8080/getImage')
  //     .then((res) => setImage(res.data[0].image))
  //     .catch((err) => console.log(err));
  // });
  return (
    <div>
      <Container className='mt-5 mb-5'>
        <h1 className='text-center mb-5'>Add Product</h1>
        <Row className='justify-content-md-center'>
          <Col md={6}>
            <Form>
              {/* <img src={`http://localhost:8080/Images/` + image} alt='' /> */}
              <Form.Group controlId='formFile'>
                <Form.Label>choose image</Form.Label>
                <Form.Control
                  type='file'
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </Form.Group>{' '}
            </Form>
          </Col>
          <Col md={6}>
            <Form>
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
