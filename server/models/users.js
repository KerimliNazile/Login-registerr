import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
username:{type:String,require:true,unique:true},
password:{type:String,require:true},
role:{type:String,require:true}
},{timestamps:true});
const Users = mongoose.model('user', userSchema);

export default Users