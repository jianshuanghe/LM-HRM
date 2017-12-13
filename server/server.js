const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/server1', require('./proxy1'));
app.use('/server2', require('./proxy2'));

app.get('/', function (req, res) {
	res.send('<h1>Hello World!</h1>');
});

app.listen(999, function () {
	console.log('Node app start at port 999');
});
