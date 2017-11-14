const express = require('express');
const usersRouter = require('./users');

const app = express();

app.use('/users', userRouter);

app.get('/', function (req, res) {
	res.send('<h1>Hello World!</h1>');
});

app.listen(9093, function () {
	console.log('Node app start at port 9093');
});
