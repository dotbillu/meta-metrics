const mng = require("mongoose");
//writing schema for mongo
const postSchema =new mng.Schema({
    platform:{
        type: String,
        required: true,
        enum: ["facebook", "instagram"]
    },
    author:String,
    likes:Number,
    shares:Number,
    comments:Number,
    views:Number,
    tags:[String],
    postedAt:{
        type: Date,
        default: Date.now
    }
});
module.exports = mng.model("Post", postSchema);