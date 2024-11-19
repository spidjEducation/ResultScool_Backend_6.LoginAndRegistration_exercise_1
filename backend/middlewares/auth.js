import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/constants.js';

export const auth = (req, res, next) => {
	const token = req.cookies.token;

	if (token) {
		const verifyResult = jwt.verify(token, JWT_SECRET);

		req.user = {
			email: verifyResult.email,
		};
	}

	next();
};
