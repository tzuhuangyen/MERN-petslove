import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';
function AdminProduct() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [order, setOrder] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedProducts, setUploadedProducts] = useState([]);
  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('type', type);
    formData.append('order', order);
    formData.append('description', description);
    console.log(formData);
    try {
      axios
        .post(`${backendUrl}/admin/products/uploadProduct`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // 設置 Content-Type
          },
        })

        .then((response) => {
          console.log(response.data);
          console.log(file);
          // 提取圖片路徑並放入 uploadedProducts 中的 images 屬性
          const imageUrl = response.data.imageUrl;
          // 將上傳的資訊添加到 uploadedProducts 中
          setUploadedProducts([
            ...uploadedProducts,
            {
              productName,
              price,
              type,
              order,
              description,
              imageUrl: [imageUrl], // 將圖片路徑放入 images 屬性中
            },
          ]);
          //clear all input
          setFile(null);
          setProductName('');
          setPrice('');
          setType('');
          setOrder('');
          setDescription('');
          // 更新商品列表
          setUploadedProducts([...uploadedProducts, response.data]);

          alert('上傳成功');
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  //test upload
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
              <Form.Group controlId='formFile'>
                <Form.Label>choose image</Form.Label>
                <Form.Control
                  type='file'
                  multiple // 允許選擇多個文件
                  onChange={(e) => setFile(e.target.files[0])}
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
            {uploadedProducts.map((product, index) => (
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
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default AdminProduct;
