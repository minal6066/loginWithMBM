const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const signToken = ({ email, _id, user_type }) =>
  jwt.sign({ email, id: _id, user_type }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

exports.addUser = async (req,res,next) => {
    if(!req.body.email || !req.body.phone_no){
        res.status(400).json({
            status: "failure",
            isSuccess : false,
            message : "Phone number and email are required fields!"
        })
    }
    const userExist = await User.findOne({roll_no : req.body.roll_no});
    if(userExist){
        res.status(400).json({
            status: "failure",
            isSuccess : false,
            message : "User with this mail already exist"
        })
    }
    const user = await User.create(req.body);
    user.password = undefined;
    const token = signToken(user);
    return res.status(200).json({
        status : 'success',
        isSuccess : true,
        token,
        message : 'User created successfully',
        data : user,
    });
}

exports.login = async (req, res, next) => {
    const {roll_no, password} = req.body;
    if(!roll_no || !password){
        return "Please enter both RollNo and password!";
    }

    const user = await User.findOne({roll_no, password});
    if(!user){
        return "Invalid RollNo or password : 401";
    }

    const token = signToken(user);
    user.password = undefined;
    res.status(200).json({
        status : 'success',
        token,
        isSuccess : true,
        data : user,
    });
};

exports.updateUser = async(req, res, next) => {
    const user = await User.findById(req.decodedData.id);
    if(!user){
        return console.log("Student with this Roll No not found");
    }
    const userUpdated = await User.findByIdAndUpdate(user._id, req.body, {
        new: true,
        runValidators : true,
    });
    userUpdated.password = undefined;
    res.status(200).json({
        status : 'success',
        isSuccess : true,
        message : 'User updated successfully',
        data : userUpdated,
    })
}

exports.remove = async(req, res, next) => {
    const user = User.findById(req.decodedData.id);
    if(!user){
        res.send(304).json({
            status: 'failure',
            isSuccess : false,
            message: 'User not found!'
        })
    }
    await User.findOneAndDelete({roll_no : req.params.rollNo});
    res.status(200).json({
        status: 'success',
        isSuccess : true,
        message : 'Account deleted successfully',
    });
}

exports.profile = async (req,res, next) => {
    console.log(req.decodedData, "Decoded Data")
    const user = await User.findById(req.decodedData.id);
    if(!user){
        res.status(401).json({
            status: 'fail',
            isSuccess: true,
            message: 'User not found!'
        })
    }
    user.password = undefined;
    res.status(200).json({
        status : 'success',
        isSuccess : true,
        data : user,
    })
}

exports.isAuth = async(req, res, next) => {
    let token;
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return next(
            console.log("You are not logged in, please login before using this route")
        );
      }
    const decodedData = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
    );
    const user = await User.findOne({ _id: decodedData.id});
    if (!user) {
        return next(
          console.log('user belonging to this token does not found', 401)
        );
      }
      req.decodedData = decodedData;
      next();
}