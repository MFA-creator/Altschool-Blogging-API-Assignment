const mongoose = require('mongoose');

export default const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	password: { type: String, required: true },
});
