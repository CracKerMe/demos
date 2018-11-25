var express = require('express'); //引入express模块
var app = express(); //创建应用

//npm install multer --save
var multer = require('multer');
var upload = multer({ dest: 'upload/' });

//返回提交文件页面。
app.get('/', function(req, res) {
    res.sendFile('takePhoto.html', { root: __dirname });
});

//单文件上传获取信息
app.post('/upload-single', upload.single('file-1'), function(req, res, next) {
    var file = req.file;
    res.send({ ret_code: '0' }); //这行代码必须要有，否则Browser会处于wait状态。
})

app.use(function(err, req, res, next) {
    res.send(err.stack);
});

app.listen(9527);
console.log('Express started on http://localhost:9527');