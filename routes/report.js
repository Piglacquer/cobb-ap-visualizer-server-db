const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
require('body-parser-csv')(bodyParser);

router.use(bodyParser.csv({
	csvParseOptions: {
		fastcsvParams: {
			headers: true,
			trim: true,
		}
	}
}));

router.post('/', (req, res) => {
	res.send(req.body);
});

module.exports = router;