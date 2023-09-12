const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const api = new Schema({
    request:{
        type: Number,
        required: true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps: true});

module.exports = mongoose.model('api',api);