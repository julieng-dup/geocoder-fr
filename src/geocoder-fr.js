const fetch = require('node-fetch');


class GeocoderFr {
    /**
     *  Geocode a string
     *
     *  @param  addr        string to be geocoded
     *  @return Promise
     */
    static async geocode(addr) {
        const response  = await fetch('https://api-adresse.data.gouv.fr/search/?q='+addr);

        return await response.json();
    }

    /**
     *  Reverse geocode a lat long
     *
     *  @param  long    longitude
     *  @params lat     latitude
     *  @return Promise
     */
    static async reverse(long, lat) {
        const response  = await fetch('https://api-adresse.data.gouv.fr/reverse/?long='+long+'&lat='+lat);

        return await response.json();
    }

    /**
     *  Geocode a string and return most accurate result
     *
     *  @param  addr        string to be geocoded
     *  @return Promise
     */
    static async geocodeBestResult(addr) {
        const data = await this.geocode(addr);

        if(data.features.length === 0) {
            return null;
        }

        return {long: data.features[0].properties.x, lat: data.features[0].properties.y};
    }

    /**
     *  Reverse geocode a lat long and return most accruate result
     *
     *  @param  long    longitude
     *  @param  lat     latitude
     *  @return Promise
     */
    static async reverseBestResult(long, lat) {
        const data = await this.reverse(long, lat);

        if(data.features.length === 0)
            return null;

        return data.features[0].properties;
    }
}


module.exports = GeocoderFr;
