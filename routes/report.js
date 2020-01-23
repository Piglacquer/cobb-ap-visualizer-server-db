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

const getBoost = (data) => {
	return data.reduce((acc, current, i) => {
		acc.push({time: current['Time (sec)'], boost: current['Boost (psi)']})
		return acc;
	}, [])
};

router.post('/', (req, res) => {
	const boost = getBoost(req.body);
	res.send(boost);
});

module.exports = router;