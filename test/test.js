const geocoder = require('../src/geocoder-fr');

async function test() {
    console.log('Reverse address : 47 rue de l\'arquebuse 08000 charleville');
    console.log(await geocoder.geocode('47 rue de l\'arquebuse 08000 charleville'));

    console.log('\nReverse address (most accurate result) : 47 rue de l\'arquebuse 08000 charleville');
    console.log(await geocoder.geocodeBestResult('47 rue de l\'arquebuse 08000 charleville'));

    console.log('\nGeocode position : 4.724433, 49.770714');
    console.log(await geocoder.reverse(4.724433, 49.770714));

    console.log('\nGeocode position (most accurate result) : 4.724433, 49.770714');
    console.log(await geocoder.reverseBestResult(4.724433, 49.770714));
}

test();
