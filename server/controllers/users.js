const usersRepository = require("../Repositories/users");
const asyncHandler=require("../middleware/asyncHandler");
const ErrorResponse=require("../utils/errorResponse");
const { createJwt }=require('../utils/jwtHelper');
const {compareWithHashedPassword}=require('../utils/passwordHelper');

const createUser = asyncHandler(async (req, res, next) => {
    const {first_name,last_name,dob,address,place,city,district,state,email,phone,password,username} = req.body;
    const users=await usersRepository.getUserByUsername(username);
    if(users && users.length>0){
        return next(new ErrorResponse(`username(${username}) already taken`,400));
    }
    const userid=await usersRepository.createUser(first_name,last_name,dob,address,place,city,district,state,email,phone,password,username);
    const token = createJwt({ id: userid });
    if (userid) {
        res.status(201).json({
            success: true,
            data: { message: "User created successfully",first_name:first_name,token:token },
        });
    }
});

const login = asyncHandler(async (req, res, next) => {
    const {password,username} = req.body;
    const users=await usersRepository.getUserByUsername(username);
    if(!users || users.length==0){
        return next(new ErrorResponse(`Invalid Credentials`,400));
    }
    const user=users[0];
    const isValid=compareWithHashedPassword(password,user.password)

    if (isValid) {
        const token = createJwt({ id: user.id });

        return res.status(200).json({
            message: "Logged In Successfully",
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                username: user.username
            },
            token: token
        });
        }
     return next(new ErrorResponse(`Invalid Credentials`,400));
});

module.exports = {
    createUser,
    login
};