const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/server0', require('./proxy0'));
app.use('/server1', require('./proxy1'));

app.get('/', function (req, res) {
	res.send('<h1>Hello World!</h1>');
});

app.listen(9090, function () {
	console.log('Node app start at port 9090');
});
