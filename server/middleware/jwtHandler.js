const { verifyToken } = require('../utils/jwtHelper');
const { getUserRolesByUserId } = require("../Repositories/users");

// ✅ AUTH MIDDLEWARE
const verifyTokenHandler = async (req, res, next) => {
    let token = req.headers['authorization'];

    if (!token || !token.includes('Bearer')) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const result = await verifyToken(token);

        if (!result.valid) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // ✅ IMPORTANT FIX (single source of truth)
        req.userId = result.userid;
        console.log("VERIFY RESULT:", result);
        return next();

    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};



// ✅ ROLE CHECK MIDDLEWARE
const verifyRoles = (roles) => {
    return async (req, res, next) => {

        const userid = req.userId; // ✅ FIX HERE

        const userRoles = await getUserRolesByUserId(userid);

        let hasRole = false;

        for (let userRole of userRoles) {
            if (roles.includes(userRole.name)) {
                hasRole = true;
                break;
            }
        }

        if (hasRole) {
            next();
        } else {
            return res.status(403).json({ message: 'You Dont Have Permission' });
        }
    };
};

module.exports = {
    verifyTokenHandler,
    verifyRoles
};