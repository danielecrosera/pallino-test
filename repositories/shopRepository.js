var csvToJson = require('csvtojson');

const jsonUrl = process.env.URL_SHOPS_JSON;
const csvUrl = process.env.URL_SHOPS_CSV;

/**
 * Retrieve the shops from external URLs. Return a JSON representation of a list of shops
 * @async
 * @returns {Promise<Array>}
 */
async function retrieveShops() {
    const responseJson = await fetch(jsonUrl);
    if (!responseJson.ok){
        throw new Error('An error has occured reading shops.json: ' + responseJson.status);
    }
    const shopsJson = await responseJson.json();
    console.debug('shops json read');

    const responseCsv = await fetch(csvUrl);
    if (!responseCsv.ok){
        throw new Error('An error has occured reading shops.csv: ' + responseCsv.status);
    }
    const csvText = await responseCsv.text();
    console.debug('shops csv read');
    const shopsCsv = await csvToJson({
            colParser: {
                id: "number",
                name: "string",
                address: "string",
                country: "string"
            }
        }).fromString(csvText);
    
    return shopsJson.concat(shopsCsv);
}    

module.exports = {retrieveShops}