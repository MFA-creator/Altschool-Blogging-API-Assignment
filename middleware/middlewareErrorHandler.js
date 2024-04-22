import logger from '../utils/logger.js';

export default const middlewareErrorHandler = (err, req, res, next) => {
	logger.error('Error:', err);
	res.status(500).json({ message: 'Internal server error' });
};
