import jwt from 'jsonwebtoken';
import chalk from 'chalk';
import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';
import { JWT_SECRET } from '../utils/constants.js';

export const loginUser = async (email, password) => {
	const user = await User.findOne({ email });

	console.log('user:', user.password);
	console.log('password:', password);

	if (!user) {
		throw new Error('user is not found');
	}

	const isPasswordCorrect = await bcrypt.compare(password, user.password);

	if (!isPasswordCorrect) {
		throw new Error('Wrong password');
	}

	console.log(chalk.bgGreen('User was login!'));

	return jwt.sign({ email }, JWT_SECRET, { expiresIn: '30d' });
};
