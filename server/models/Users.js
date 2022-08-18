const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        // require: true,
    },

    username:{
        type: String,
        // required: true,
    },
    email:{
        type: String,
        // required: true
    },
    phone:{
        type: Number,
        // required: false,
    },

    password:{
        type: String,
        // required: true,
    },

    address:{
        type: String,
        // required: false,
    },

    country:{
        type: String,
        // requried: false,
    }

});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users