import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import ProductTable from './component/ProductTable';
import UpdateFileBtn from './component/UpdateFileBtn';
const backendUrl = 'https://petslove-mern.onrender.com';

function AdminProduct() {
  // const [productName, setProductName] = useState('');
  // const [price, setPrice] = useState('');
  // const [order, setOrder] = useState('');
  // const [type, setType] = useState('');
  // const [description, setDescription] = useState('');
  // const [file, setFile] = useState(null); // 追加 file 状态来存储选择的文件
  const [images, setImages] = useState([]);
  const [updateUI, setUpdateUI] = useState('');

  useEffect(() => {
    axios
      .get(`${backendUrl}/adminProducts/`)
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);

  return (
    <div>
      <Container className='mt-5 mb-5'>
        <h1 className='text-center mb-5'>Add Product</h1>
        <Row className='justify-content-md-center'>
          <Col md={6}>
            <UpdateFileBtn setUpdateUI={setUpdateUI} />
          </Col>
        </Row>

        <ProductTable images={images} />
      </Container>
    </div>
  );
}

export default AdminProduct;
