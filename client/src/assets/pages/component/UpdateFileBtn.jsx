import React from 'react';
import axios from 'axios';
import { IoCloudUploadOutline } from 'react-icons/io5';
const backendUrl = 'https://petslove-mern.onrender.com';
import { Button } from 'react-bootstrap';

function UpdateFileBtn({ setUpdateUI }) {
  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    // formData.append('productName', productName);
    // formData.append('price', price);
    // formData.append('type', type);
    // formData.append('order', order);
    // formData.append('description', description);
    axios
      .post(
        // `${backendUrl}/adminProducts/uploadProduct`,
        `${backendUrl}/adminProducts/uploadProduct`,
        formData
      )
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data_id);
        // setProductName('');
        // setPrice('');
        // setType('');
        // setOrder('');
        // setDescription('');
        console.log(updateUI);
        alert('上傳成功');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {' '}
      <label htmlFor='file_picker'>
        <input type='file' name='file_picker' id='file_picker' />
        <Button onChange={(e) => handleUpload(e)}>
          {' '}
          <IoCloudUploadOutline size={36} />
        </Button>
      </label>
    </div>
  );
}

export default UpdateFileBtn;
