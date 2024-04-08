const mongoose = require('mongoose');
      Schema   = mongoose.Schema

const usersSchema = new Schema({

    googleId     : {type: String},
    idToken    : {type: String}

})

const Users = mongoose.model("Users", usersSchema);

module.exports = Users