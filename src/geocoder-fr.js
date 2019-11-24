const fetch = require('node-fetch');


class GeocoderFr {
    static async geocode(addr) {
        const response  = await fetch('https://api-adresse.data.gouv.fr/search/?q='+addr);

        return await response.json();
    }

    static async reverse(long, lat) {
        const response  = await fetch('https://api-adresse.data.gouv.fr/reverse/?long='+long+'&lat='+lat);

        return await response.json();
    }

    static async geocodeBestResult(addr) {
        const data = await this.geocode(addr);

        if(data.features.length === 0) {
            return null;
        }

        return {long: data.features[0].properties.x, lat: data.features[0].properties.y};
    }

    static async reverseBestResult(long, lat) {
        const data = await this.reverse(long, lat);

        if(data.features.length === 0)
            return null;

        return data.features[0].properties;
    }
}


module.exports = GeocoderFr;
