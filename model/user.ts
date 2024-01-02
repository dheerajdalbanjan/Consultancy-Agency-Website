import mongoose, { models } from "mongoose";


const UserSchema = new  mongoose.Schema({
    name : {
        type:  String , 
        required : true
    },
    email: {
        type: String , 
        required: true
    }, 
    password: {
        type : String , 
        required : true 
    }
}, { timestamps: true})

const User = models.User || mongoose.model("user", UserSchema);
export default User;