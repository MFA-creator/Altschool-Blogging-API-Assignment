const mongoose = require('mongoose');

export default const blogSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	description: String,
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	state: { type: String, enum: ['draft', 'published'], default: 'draft' },
	readCount: { type: Number, default: 0 },
	readingTime: { type: Number },
	tags: [String],
	body: { type: String, required: true },
	timestamp: { type: Date, default: Date.now },
});
