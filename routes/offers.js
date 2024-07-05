const express = require('express');
const router = express.Router();

// send 400
router.get('/', (req, res) => {    
    res.status(400);
    res.json({
        status: 400,
        error: "A countryCode param is required"
    });
});

// send 400
router.get('/shop', (req, res) => {    
    res.status(400);
    res.json({
        status: 400,
        error: "A shopId param is required"
    });
});

const offerController = require("../controllers/offerController");

//  [GET] /api/v1/offers/shop/{shopID}
router.get('/shop/:shopID', offerController.offer_list_by_shop_id)

//  [GET] /api/v1/offers/{countryCode}
router.get('/:countryCode', offerController.offer_list_by_country_code);

module.exports = router;