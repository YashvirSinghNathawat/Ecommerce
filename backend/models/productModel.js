const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please Enter Product Name"]
    },
    description:{
        type:String,
        required: [true,"Please Enter Product Description"],
        trim:true
    },
    price:{
        type:Number,
        require: [true,"Please Enter Product Price"],
        maxLength: [8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default: 0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        require:[true,"Please Enter Product Category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews: [
        {
            name:{
                type:String,
                require:true
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product",productSchema);