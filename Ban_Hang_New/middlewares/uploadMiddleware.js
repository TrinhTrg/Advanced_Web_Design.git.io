// const multer = require('multer');
// const path = require('path');

// // Nơi lưu trữ file upload
// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, 'uploads/'); // Thư mục uploads
//     },
//     filename: function(req, file, cb){
//         cb(null, Date.now() + path.extname(file.originalname)); // Tạo tên file unique
//     }
// });

// const upload = multer({ storage: storage });

// module.exports = upload;
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Tạo folder uploads nếu chưa tồn tại
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Chỉ chấp nhận file ảnh'), false);
  }
};

module.exports = multer({ storage, fileFilter });
