const asyncHandler = require('express-async-handler');
const {retrieveByShopId, retrieveByCountryCode} = require('../services/offerService')

// Offer list by shopID
module.exports.offer_list_by_shop_id = asyncHandler(async (req, res, next) => {
    const shopId = parseShopId(req.params.shopID); // return false if not a positive integer

    if(shopId !== false) {
        try {
            var offers = await retrieveByShopId(shopId);
            res.json({
                total: offers.length,
                offers: offers
            });            
        }
        catch(e) {
            console.error(e);
            res.status(500);
            res.json({
                status: 500,
                error: e.message
            });
        }
    }
    else {
        console.error('Invalid shopID "' + req.params.shopID + '"');
        res.status(400);
        res.json({
            status: 400,
            error: "shopID must be a positive integer"
        });
    }
});

// Offer list by countryCode
module.exports.offer_list_by_country_code = asyncHandler(async (req, res, next) => {
    const countryCode = req.params.countryCode;
    
    if(validCountryCode(countryCode)){
        try {
            var offers = await retrieveByCountryCode(countryCode);
            res.json({
                total: offers.length,
                offers: offers
            });
        }
        catch(e) {
            console.error(e);
            res.status(500);
            res.json({
                status: 500,
                error: e.message
            });
        }
    }
    else {
        console.error('Invalid countryCode "' + countryCode + '"');
        res.status(400);
        res.json({
            status: 400,
            error: "countryCode must be a string of 2 letters"
        });
    }
});

/**
 * If shopId is valid (positive integer), get number from string. False otherwise 
 * @param {string} shopId 
 * @returns {number|boolean}
 */
function parseShopId(shopId) {
    if( /^([1-9]\d*)$/.test(shopId)) {
        return parseInt(shopId);
    }
    else {
        return false;
    }
}

/**
 * Check if countryCode is a valid string
 * @param {string} countryCode 
 * @returns {boolean}
 */
function validCountryCode(countryCode) {
    return /^([a-zA-Z]){2}$/i.test(countryCode);
}