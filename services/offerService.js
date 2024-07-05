const shopRepository = require('../repositories/shopRepository');
const offerRepository = require('../repositories/offerRepository');

/**
 * Retrieve all offers related to a specific shopId
 * @param {number} shopId 
 * @returns {Promise<Array>}
 */
async function retrieveByShopId(shopId) {
    var offers = await offerRepository.retrieveOffers();
    return offers.filter(offer => offer.shop_id == shopId).sort((offer1, offer2) => offer1.price - offer2.price);
}

/**
 * Retrieve all offers of a country
 * @param {string} countryCode 
 * @returns {Promise<Array>}
 */
async function retrieveByCountryCode(countryCode) {
    var filteredOffers = [];

    var allShops = await shopRepository.retrieveShops();
    var shopsByCountry = [];
    var shopIds = [];
    
    allShops.forEach(s => {
        if(s.country.toLowerCase() == countryCode.toLowerCase()){
            shopsByCountry[s.id] = s;
            shopIds.push(s.id);
        }
    });

    if(shopsByCountry.length > 0) {
        var allOffers = await offerRepository.retrieveOffers();
        filteredOffers = allOffers.reduce(function(filtered, offer) {
                    if (shopIds.includes(offer.shop_id)) {
                    offer.shop = shopsByCountry[offer.shop_id];
                    filtered.push(offer);
                    }
                    return filtered;
                }, 
            [])
            .sort((offer1, offer2) => offer1.price - offer2.price);
    }

    return filteredOffers;
}

module.exports = {retrieveByShopId, retrieveByCountryCode}