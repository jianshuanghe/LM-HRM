const axios = require('axios');
const querystring = require('query-string');

const baseUrl = 'http://47.95.229.11:8080';

module.exports = function (req, res, next) {

	const path = req.path;
	axios(`${baseUrl}${path}`, {
		method: req.method,
		params: req.query,
		data: req.body
	}).then(resp => {
		if (resp.status === 200) {
			res.send(resp.data)
		} else {
			res.status(resp.status).send(resp.data)
		}
	}).catch(err => {
		if (err.response) {
			res.status(500).send(err.response.data);
		} else {
			res.status(500).send({
				success: false,
				msg: '未知错误'
			})
		}
	})
}
