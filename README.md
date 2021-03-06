# geocoder-fr

Geocoder & reverse-geocoder for French territory. 

* No API key is required, this package use French gouv opendata API.
* Requests results are geojson formated.
* All package function are async.
* This package can be used with node or react 

## Usage

```
var geocoder = require('geocoder-fr')
```

## Examples

### Get all location matching with address

```
geocoder.geocode('47 rue de l\'arquebuse 08000 charleville').then((addr)=> console.log(addr));

```

### Get all address matching with GPS lat & long (WGS84 coords)

```
geocoder.reverse(4.724433, 49.770714).then((coords)=> console.log(coords));
```

### Get most accurate location matching with address

```
geocoder.geocodeBestResult('47 rue de l\'arquebuse 08000 charleville').then((addr)=> console.log(addr));

```

### Get most accurate address matching with GPS lat & long (WGS84 coords)

```
geocoder.reverseBestResult(4.724433, 49.770714).then((coords)=> console.log(coords));
```

## Test

```
node test/test.js
```
