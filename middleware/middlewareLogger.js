import logger from '../utils/logger.js';

export default const middlewareLogger = (req, res, next) => {
	logger.info(`${req.method} ${req.url}`);
	next();
};
