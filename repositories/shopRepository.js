var csvToJson = require('csvtojson');

const jsonUrl = process.env.URL_SHOPS_JSON;
const csvUrl = process.env.URL_SHOPS_CSV;

async function retrieveShops() {
    const responseJson = await fetch(jsonUrl);
    const shopsJson = await responseJson.json();
    console.log('shops json read');

    const responseCsv = await fetch(csvUrl);
    const csvText = await responseCsv.text();
    console.log('shops csv read');
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