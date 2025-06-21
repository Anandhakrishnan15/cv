const jwt = require('jsonwebtoken');
const User = require('../../../excel_sheet_analysis-/backend/models/User');
require('dotenv').config();

const protect = async (req, res, next) => {
    try {
        let token;

        // Check for Authorization header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({ message: 'Not authorized, token missing' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        // Find user by decoded token's ID
        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(401).json({ message: 'Not authorized, user not found' });
        }

        req.user = user; // Attach user to request
        next(); // Proceed to the route
    } catch (error) {
        console.error('Auth middleware error:', error.message);
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

module.exports = protect;
