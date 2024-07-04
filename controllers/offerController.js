const asyncHandler = require('express-async-handler');
const {retrieveByShopId, retrieveByCountryCode} = require('../services/offerService')

// Offer list by shopID
module.exports.offer_list_by_shop_id = asyncHandler(async (req, res, next) => {
    console.log('shopID', req.params.shopID);

    var offers = await retrieveByShopId();

    res.json(offers);

});

// Offer list by countryCode
module.exports.offer_list_by_country_code = asyncHandler(async (req, res, next) => {
    console.log('countryCode', req.params.countryCode);

    const offers = [
        { id: 1, name: 'OFFER_1' },
        { id: 2, name: 'OFFER_2' },
        { id: 3, name: 'OFFER_3' },
    ];

    res.json(offers);
});