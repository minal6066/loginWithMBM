const User = require('../models/user');
const jwt = require('jsonwebtoken');

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
    const {user_type, can_detail} = req.body;
    if(!user_type){
        res.status(400).json({
            status: "failure",
            isSuccess : false,
            message : "Specify a user type!"
        })
    }
    if(user_type !==1 && user_type !==2){
        res.status(400).json({
            status: "failure",
            isSuccess : false,
            message : "Not a valid user type"
        })
    }
    const user = await User.create(req.body);
    console.log("User created successfully");
    user.password = undefined;
    const token = signToken(user);
    return res.status(201).json({
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
    if(!req.params.rollNo){
        return console.log("Please provide Roll No");
    }
    const user = await User.findOne({roll_no : req.params.rollNo, isDeleted :{$ne : true}});
    if(!User){
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
    await User.findByIdAndDelete(req.params.rollNo);
    res.status(304).json({
        status: 'success',
        isSuccess : true,
        message : 'Account deleted successfully',
    });
}

exports.profile = async (req,res, next) => {
    const rollNo = JSON.stringify(req.params.rollNo);
    console.log(rollNo);
    const user = User.findOne({'roll_no':rollNo});
    user.password = undefined;
    res.status(200).json({
        status : 'success',
        isSuccess : true,
        data : user,
    })
}