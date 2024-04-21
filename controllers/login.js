import bcrypt from 'bcryptjs';
import generateToken from './generateToken.js';
import config from '../configs/config.js';
import User from '../models/User';
import logger from '../utils/logger';

export default const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}
		const token = generateToken(user._id);
		res.status(200).json({ token });
	} catch (error) {
		logger.error('Error in login:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};
