import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';

const backendUrl = 'https://petslove-mern.onrender.com';
function AdminProduct({ photos }) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [order, setOrder] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedProducts, setUploadedProducts] = useState([]);
  const [file, setFile] = useState(null); // 追加 file 状态来存储选择的文件

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', file);
    // formData.append('productName', productName);
    // formData.append('price', price);
    // formData.append('type', type);
    // formData.append('order', order);
    // formData.append('description', description);
    axios
      .post(
        `${backendUrl}/admin/products/uploadProduct`,
        formData
        // {
        //   headers: {
        //     'Content-Type': 'multipart/form-data', // 設置 Content-Type
        //   },
        // }
      )
      .then((res) => {
        console.log(res.data);
        const uploadedData = res.data;
        // setProductName('');
        // setPrice('');
        // setType('');
        // setOrder('');
        // setDescription('');
        console.log(uploadedData);
        alert('上傳成功');
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                  multiple // 允許選擇多個文件
                  onChange={(e) => {
                    handleUpload(e);
                  }}

                  // onChange={handleFileChange}
                />
                {/* 選擇的文件顯示在網頁上作為圖片。 */}
                {/* {file && (
                  <>
                    {file.map((selectedFile, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(selectedFile)}
                        alt={`Selected file ${index}`}
                      />
                    ))}
                  </>
                )} */}
              </Form.Group>{' '}
            </Form>
          </Col>
          {/* <Col md={6}>
            <Form>
              <Form.Group controlId='productName'>
                <Form.Label>product name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='product name'
                  value={productName}
                  onChange={(e) => {
                    setProductName(e.target.value);
                    console.log('product name:', e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId='price'>
                <Form.Label>price</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='price'
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                    console.log('price:', e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId='order'>
                <Form.Label>order</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='order'
                  value={order}
                  onChange={(e) => {
                    setOrder(e.target.value);
                    console.log('order:', e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId='type'>
                <Form.Label>type</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='type'
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                    console.log('setType:', e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId='description'>
                <Form.Label>description</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder='description'
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    console.log('setDescription:', e.target.value);
                  }}
                />
              </Form.Group>
              <Button variant='primary' type='submit' onClick={handleUpload}>
                submit
              </Button>
            </Form>
          </Col> */}
        </Row>
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
          <tbody>
            {/* {uploadedProducts.map((product, index) => (
              <tr key={index}>
                <td>
                  {product.images && product.images.length > 0 && (
                    <img
                      src={product.images[0]}
                      alt={`Image`}
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  )}
                </td>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.type}</td>
                <td>{product.order}</td>
                <td>{product.price}</td>
                <td>
                  <FiEdit2 />
                  <MdOutlineDeleteForever />
                </td>
              </tr>
            ))} */}
            {/* {photos.map(({ photo, _id }) => (
              <div key={_id}>
                <img
                  src={`http://localhost:8080/admin/api/uploadedProducts/${photo}`}
                />
              </div>
            ))} */}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default AdminProduct;
