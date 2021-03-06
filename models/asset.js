const mongoose = require('mongoose');

const auctionDateSchema = mongoose.Schema({
    time: {type: String, required: true},
    day: {type: String, required: true}
});


const assetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    winner: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    minimumBid: {
        type: Number,
        required: true
    },
    openingDate: {
        type: auctionDateSchema,
        required: true
    },
    closingDate: {
        type: auctionDateSchema,
        required: true
    },
    status: {
        type: Boolean,
        required: false,
        default: false
    }

});


module.exports = mongoose.model('asset', assetSchema);