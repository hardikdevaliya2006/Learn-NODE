import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    userpassword: {
        type: String,
        require: true
    }
})

const User = mongoose.model("User", userSchema)

export default User