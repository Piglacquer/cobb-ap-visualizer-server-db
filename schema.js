const {
	buildSchema
} = require('graphql');

var schema = new buildSchema(`
	type Query {
		hello: String
	}
`)

var root = {
	hello: () => {
		return 'hello, idiot'
	}
}

module.exports = {schema, root};