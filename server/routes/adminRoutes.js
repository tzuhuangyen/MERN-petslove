const express = require('express');
const router = express.Router();
////adminUpload使用multer处理文件上传并将文件保存在指定的目录
const adminUpload = require('../adminUpload');
////postProduct控制器函数，用于处理上传产品的请求
const postProduct = require('../controller');
const ProductModel = require('../models/productModel');

// 後端路由/productList/upload处理图像上传的路由
router.post('/products/uploadProduct', adminUpload.array('file'), postProduct);
// router.post('/productList/upload', adminUpload.single('file'), (req, res) => {
//   ProductModel.create({ image: require.file.filename })
//     .then((result) => res.json(result))
//     .catch((err) => console.log(err));
// });

// router.post('/upload', adminUpload.single('file'), (req, res) => {
//   console.log(req.file);
// });
//這個路由可能不需要 而是改成axios mongodb取得所有產品and display
router.get('/productList/getImage', (req, res) => {
  ProductModel.find()
    .then((products) => {
      if (products) {
        res.json(products);
      } else {
        res.status(404).json({ message: 'No products found' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
