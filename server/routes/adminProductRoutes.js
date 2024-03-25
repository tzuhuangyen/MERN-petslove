const express = require('express');
const router = express.Router();
////adminUpload使用multer处理文件上传并将文件保存在指定的目录
////postProduct控制器函数，用于处理上传产品的请求
// const postProductController = require('../postProductController');
const adminUploadMiddleware = require('../middlewares/adminUploadMiddleware');
const uploadImageModel = require('../models/uploadImageModel');

router.get('/', async (req, res) => {
  try {
    // 从 MongoDB 中检索所有产品数据
    const allProducts = await uploadImageModel
      .find()
      .sort({ createdAt: 'descending' });
    res.json(allProducts);
    console.log('Handling GET request to mongoDB for /products');
    console.log(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  // 返回产品数据给前端
  // res.json(allProducts);
});

// 後端路由/products/uploadProduct处理图像上传的路由
router.post(
  '/uploadProduct',
  adminUploadMiddleware.single('photo'),
  (req, res) => {
    // const photo = req.file.filename;
    console.log(req.file);
    // 在这里可以访问上传的文件对象 req.file
    if (!req.file) {
      return res.status(400).send('No files were uploaded.');
    }
    uploadImageModel
      .create({ photo: req.file.filename })
      .then((data) => {
        console.log('Product uploaded successfully');
        console.log(data);
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('Failed to upload product.');
      });
  }
);
// router.post(
//   '/products/uploadProduct',
//   adminUpload.array('file'),

//   (req, res) => {
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).send({ error: 'No file uploaded' });
//     }
//     console.log(req.files);
//     // 获取上传的文件路径
//     const imagePaths = req.files.map((file) => file.path);
//     // 将图片路径保存到 MongoDB 中，图片模型 imageModel
//     ProductModel.insertMany(imagePaths.map((imagePath) => ({ imagePath })))
//       .then(() => {
//         sendStatus({ message: 'Images uploaded successfully' });
//       })
//       .catch((err) => {
//         console.error(err);

//         res.status(500).send({ message: 'Failed to save images' });
//       });
//   }
// );
// router.post('/productList/upload', adminUpload.single('file'), (req, res) => {
//   ProductModel.create({ image: require.file.filename })
//     .then((result) => res.json(result))
//     .catch((err) => console.log(err));
// });

// router.post('/upload', adminUpload.single('file'), (req, res) => {
//   console.log(req.file);
// });

module.exports = router;
