const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path');

router.get('/download', (req, res) => {
    // 构建静态资源路径
    const staticPath = path.join(__dirname, '../public', '1749374573930.pdf');

    const filePath = staticPath
    // 检查文件是否存在
    // if (!fs.existsSync(req.query.url)) {
    //     debugger
    //     return res.status(404).send('File not found');
    // }

    // 获取文件信息（主要用于设置Content-Length头部）
    const stat = fs.statSync(filePath);

    // 设置响应头
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf; charset=binary');
    res.setHeader('Content-Disposition', 'attachment; filename="example.pdf"');

    // 创建文件流并管道到响应
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});

module.exports = router