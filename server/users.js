const express = require('express');
const Router = express.Router();

Router.get('/login', function (req, res) {
	return res.json({
		token:'eja8pkuuvus372m0uotij9usroqnud7g',
		role:'SuperAdministrator',
		id:'59fff62d4540bf30d822c7d2'
	})
})

module.exports = Router
