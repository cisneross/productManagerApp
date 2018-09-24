var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
//fields
title:{type:String, required: [true, "Title is required"], minlength: 3},
price: {type:Number, required: [true,"Price must have a price"], default: 0.00, minlength:1},
img_url:{type:String, required:[true, "Include image url"], minlength: 1}
}, {timestamps:true});

mongoose.model('Product', ProductSchema);