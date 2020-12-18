import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

//reviews on the host
const userReviewsSchema = mongoose.Schema({
    name: { type:String , required:true},
    rating:{ type:Number , required:true},
    comment:{ type:String , required:true},
},{
    timestamps:true
});


//user schema 
const userSchema = mongoose.Schema({
    name:{ type:String, required:true },
    email:{ type:String, required:true },
    password:{ type:String, required:true },
    profileImg:{ type:String, required:true },
    // userReviews:{ userReviewsSchema },
    // userRating:{ type:Number, required:true, default:0 },
    // userReviewsCount:{ type:Number, required:true, default:0 },
    identityCard:{ type:Number, min:10000000000000, max:99999999999999 ,required:true },
    places:[{type: mongoose.Types.ObjectId, required:true, ref:'Place'}]
},{
    timestamps:true
})

userSchema.methods.matchPassword = async function(providedPass){
    return await bcrypt.compare(providedPass, this.password)
}

const User = mongoose.model('User', userSchema);
export default User;