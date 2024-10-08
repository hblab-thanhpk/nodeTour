'use strict'

const {model, Schema Types} = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Key'
const COLLECTION_NAME = 'Keys'

// Declare the Schema of the Mongo model
var keyTokenSchema = new Schema({
    user:{
        type:Schema.Types.Object,
        required: true,
        ref: 'Shop'
    },
    publicKey:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:Array,
        default: []
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, keyTokenSchema);