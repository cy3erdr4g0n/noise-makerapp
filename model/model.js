const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    something_todo:String
})

let userModel = mongoose.model('users_tb',userSchema)
module.exports = userModel