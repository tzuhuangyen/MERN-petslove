const express = require('express');
const router = express.Router();
////adminUpload使用multer处理文件上传并将文件保存在指定的目录
const adminUpload = require('../adminUpload');
////postProduct控制器函数，用于处理上传产品的请求
// const postProductController = require('../postProductController');
const ImageModel = require('../models/imageModel');

// 後端路由/productList/upload处理图像上传的路由
router.post(
  '/products/uploadProduct',
  adminUpload.array('file'),

  (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send({ error: 'No file uploaded' });
    }
    console.log(req.files);
    // 获取上传的文件路径
    const imagePaths = req.files.map((file) => file.path);
    // 将图片路径保存到 MongoDB 中，图片模型 imageModel
    ImageModel.insertMany(imagePaths.map((imagePath) => ({ imagePath })))
      .then(() => {
        res.send({ message: 'Images uploaded successfully' });
      })
      .catch((err) => {
        console.error(err);

        res.status(500).send({ message: 'Failed to save images' });
      });
  }
);
// router.post('/productList/upload', adminUpload.single('file'), (req, res) => {
//   ProductModel.create({ image: require.file.filename })
//     .then((result) => res.json(result))
//     .catch((err) => console.log(err));
// });

// router.post('/upload', adminUpload.single('file'), (req, res) => {
//   console.log(req.file);
// });
//這個路由可能不需要 而是改成axios mongodb取得所有產品and display
router.get('/products', (req, res) => {
  ImageModel.find()
    .then((images) => {
      if (images) {
        res.json(images);
      } else {
        res.status(404).json({ message: 'No images found' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
