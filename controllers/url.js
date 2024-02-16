const ShortUniqueId = require('short-unique-id');
const url = require('../models/url');

async function generateNewShortUrl (req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "url is required"})
    const shortiD = short-unique-id(8);
    await url.create({
        shortiD: shortid ,
        redirecturl: body.url,
        visitedhistory: [],
        
    });

    return res.json({id: shortiD});

}
module.exports={
    generateNewShortUrl,
};

