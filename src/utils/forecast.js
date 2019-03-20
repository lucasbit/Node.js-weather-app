const request = require('request');

const forecast = (langitude,latitude, callback) => {
    const url = `https://api.darksky.net/forecast/af19e0971171fbcd92269fc60cdf7244/${langitude},${latitude}?units=si`

    request({url,json:true},(error,{body})=>{
        if(error){
            callback(`Unable to connect to weather service!`,undefined);
        } else if(body.error) {
            callback(`Unable to find location`,undefined);
        } else {
            callback(undefined,`Its currently  ${body.currently.temperature} degrees out. There is ${body.currently.precipProbability} % chance of rain`);
        }
    })
}

module.exports = forecast;

