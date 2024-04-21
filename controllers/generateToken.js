import jwt from 'jsonwebtoken';

export default const generateToken = (userId) => {
	return jwt.sign({ userId }, config.jwtSecret, { expiresIn: '1h' });
};
