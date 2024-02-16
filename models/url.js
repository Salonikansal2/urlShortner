const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortid: {
        type: String,
        required : true,
        unique: true,

    },
    redirecturl:{
        type: String,
        required : true,
    },
    totalclicks:{
        timestamps = 
    },
});

const url = mongoose.model('url' , urlSchema);

module.exports = url;









