const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {    
    console.debug('shop root');

    res.send('A valid countryCode or shopId is required');
});

router.get('/shop', (req, res) => {    
    console.debug('shop root');

    res.send('A valid shopId is required');
});

//  [GET] /api/v1/offers/shop/{shopID} 
router.get('/shop/:shopID', (req, res) => {    
    console.log('shopID', req.params.shopID);

    const offers = [
        { id: 1, name: 'OFFER_1' },
        { id: 2, name: 'OFFER_2' },
        { id: 3, name: 'OFFER_3' },
    ];

    res.json(offers);
})

//  [GET] /api/v1/offers/{countryCode}
router.get('/:countryCode', (req, res) => {

    console.log('countryCode', req.params.countryCode);

    const offers = [
        { id: 1, name: 'OFFER_1' },
        { id: 2, name: 'OFFER_2' },
        { id: 3, name: 'OFFER_3' },
    ];

    res.json(offers);
});

module.exports = router;