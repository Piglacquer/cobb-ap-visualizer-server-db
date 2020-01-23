const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const { schema, root } = require('./schema')
const report = require('./routes/report');
const app = express();

app.use(cors());
app.use('/report', report);
app.use(
	'/graphql', 
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

const port = 3002;
app.listen(port, () => console.warn(`listening on ${port}`));
