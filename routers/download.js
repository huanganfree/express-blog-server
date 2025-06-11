const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path');

router.get('/download', (req, res) => {
    // 获取静态资源路径
    const filePath = path.join(__dirname, '../public', req.query.fileName);

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('File not found');
    }

    // 获取文件信息（主要用于设置Content-Length头部）
    const stat = fs.statSync(filePath);
    const contentType = {
        '.pdf': 'application/pdf',
        '.txt': 'text/plain',
        '.jpg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.zip': 'application/zip',
        '.tar': 'application/x-tar',
        '.gz': 'application/gzip',
        '.json': 'application/json',
        // 添加其他需要的 MIME 类型
    }[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    // 设置响应头
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', `${contentType}; charset=binary`);
    res.setHeader('Content-Disposition', 'attachment');

    // 创建文件流并管道到响应
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});

module.exports = router