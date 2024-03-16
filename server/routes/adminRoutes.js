const express = require('express');
const router = express.Router();
////adminUpload使用multer处理文件上传并将文件保存在指定的目录
const adminUpload = require('../adminUpload');
////postProduct控制器函数，用于处理上传产品的请求
const postProduct = require('../controller');

// 处理图像上传的路由
router.post('/productList/upload', adminUpload.single('file'), postProduct);

// router.post('/upload', adminUpload.single('file'), (req, res) => {
//   console.log(req.file);
// });

module.exports = router;
