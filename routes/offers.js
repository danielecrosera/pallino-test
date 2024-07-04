const express = require('express');
const router = express.Router();

// do nothing
router.get('/', (req, res) => {    
    res.send('A valid countryCode is required');
});

// do nothing
router.get('/shop', (req, res) => {   
    res.send('A valid shopId is required');
});

const offerController = require("../controllers/offerController");

//  [GET] /api/v1/offers/shop/{shopID}
router.get('/shop/:shopID', offerController.offer_list_by_shop_id)

//  [GET] /api/v1/offers/{countryCode}
router.get('/:countryCode', offerController.offer_list_by_country_code);

module.exports = router;