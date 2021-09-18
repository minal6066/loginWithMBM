const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        id : {type : Schema.ObjectId},
        can_name : {
            type: Object,
            required: [true, 'Name is a required field']
        },
        roll_no: {
            type: String, 
            unique: true,
            required: [true, 'Roll no is a required field']
        },
        email : {
            type : String,
            required : [true, 'Email is a required field'],
            unique : true,
        },
        phone_no : {
            type: Number,
            required : [true, 'Phone no is a required field'],
            unique : true,
        },
        password : {
            type : String,
            required : [true, 'Password is a required field'],
            minLength : 6,
            select : false,
        },
        isDeleted : {type:Boolean, default: false},
        passwordChangedAt : Date,
        passwordResetToken : String,
        passwordResetExpires : Date,
    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
      }
);

module.exports = mongoose.model('user', userSchema, 'user');