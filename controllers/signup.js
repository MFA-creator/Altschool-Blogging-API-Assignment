import bcrypt from 'bcryptjs';
import generateToken from './generateToken.js';
import config from '../configs/config.js';
import User from '../models/User.js';
import logger from '../utils/logger.js';

export default const signup = async (req, res) => {
	try {
		const { email, firstName, lastName, password } = req.body;
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'Email is already registered' });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({ email, firstName, lastName, password: hashedPassword });
		await newUser.save();
		const token = generateToken(newUser._id);
		res.status(201).json({ token });
	} catch (error) {
		logger.error('Error in signup:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};
