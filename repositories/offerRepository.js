const jsonUrl = process.env.URL_OFFERS_JSON;

async function retrieveOffers() {
    const responseJson = await fetch(jsonUrl);
    const offersJson = await responseJson.json();
    console.log('offers json read');

    return offersJson;
}

module.exports = {retrieveOffers}