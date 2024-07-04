const shopRepository = require('../repositories/shopRepository');
const offerRepository = require('../repositories/offerRepository');

async function retrieveByShopId(shopId) {
    // var shops = await shopRepository.retrieveShops();
    // var shop = shops.filter(s => s.id == shopId);

    var offers = await offerRepository.retrieveOffers();
    return offers.filter(o => o.shop_id == shopId);
}

async function retrieveByCountryCode(countryCode) {
    return [];
}

module.exports = {retrieveByShopId, retrieveByCountryCode}