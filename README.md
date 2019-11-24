# geocoder-fr

Geocoder & reverse-geocoder for French territory.

No API key needed.

## Usage

```
var geocoder = require('geocoder-fr')
```

## Examples

### Get all location matching with address

```
console.log(await geocoder.geocode('47 rue de l\'arquebuse 08000 charleville'));

```

### Get all address matching with GPS lat & long (WGS84 coords)

```
console.log(await geocoder.reverse(4.724433, 49.770714));
```

### Get most accurate location matching with address

```
console.log(await geocoder.geocodeBestResult('47 rue de l\'arquebuse 08000 charleville'));

```

### Get most accurate address matching with GPS lat & long (WGS84 coords)

```
console.log(await geocoder.reverseBestResult(4.724433, 49.770714));
```

## Test

```
node test/test.js
```
