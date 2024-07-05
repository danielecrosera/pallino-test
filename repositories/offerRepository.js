const jsonUrl = process.env.URL_OFFERS_JSON;

/**
 * Retrieve the offers from external URL. Return a JSON representation of a list of offers
 * @async
 * @returns {Promise<Array>}
 */
async function retrieveOffers() {        
    var responseJson = await fetch(jsonUrl);
    if (!responseJson.ok){
        throw new Error('An error has occured reading offers.json: ' + responseJson.status);
    }

    var offersJson = await responseJson.json();
    console.debug('offers json read');

    return offersJson;
}

module.exports = {retrieveOffers}