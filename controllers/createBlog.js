import Blog from '../models/Blog.js';
import User from '../models/User.js';
import logger from '../utils/logger.js';

export default const createBlog = async (req, res) => {
	try {
		const { title, description, tags, body } = req.body;
		const authorId = req.user.userId; // Extracted from JWT token
		const author = await User.findById(authorId);
		if (!author) {
			return res.status(404).json({ message: 'Author not found' });
		}
		const newBlog = new Blog({
			title,
			description,
			tags,
			body,
			author: author._id,
		});
		await newBlog.save();
		res.status(201).json(newBlog);
	} catch (error) {
		logger.error('Error in createBlog:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};
