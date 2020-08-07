const mongoose = require('mongoose');

const BookSchema  = new mongoose.Schema({
	name:String,
	description:String,
	isbn:String,
	authors:[String],
	coverUrl:String
})

module.exports = mongoose.model('Book',BookSchema);