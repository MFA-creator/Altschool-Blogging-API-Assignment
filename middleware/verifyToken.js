import jwt from 'jsonwebtoken';
import config from '../configs/config.js';
import logger from '../utils/logger.js';

export default const verifyToken = (req, res, next) => {
	const token = req.header('Authorization');

	if (!token) {
		return res.status(401).json({ message: 'Access denied. No token provided.' });
	}

	try {
		const decoded = jwt.verify(token, config.jwtSecret);
		req.user = decoded;
		next();
	} catch (error) {
		logger.error('Error in verifyToken:', error);
		res.status(401).json({ message: 'Invalid token.' });
	}
};
