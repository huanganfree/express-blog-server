// require('../app')
// require('../models/index')

const app = require('../app');
app.use((req, res, next) => {
    console.log('Before next()');
    next(); // 会继续执行后续中间件，但当前函数的剩余代码仍会执行
    console.log('After next()'); // 这行代码仍会执行
});

app.use((req, res) => {
    res.send('Hello World');
});