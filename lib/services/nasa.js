const fetch = require('cross-fetch');
const res = require('express/lib/response');

async function checkAsteroidThreat(){
    // create current date in appropriate format.
    const newDate = new Date();
    
    const currDate = newDate.toISOString().split('T')[0];

    // pass current date to appropriate call.
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${currDate}&end_date=${currDate}&api_key=xYgG5CyjnkUORYdJSI7o1YAikvBnmabUPiFC8MOY`);

    const {near_earth_objects} = await response.json();

    // // filter through returning array, searching for potential threats.
    const validThreats = near_earth_objects[currDate].filter(asteroid => asteroid.is_potentially_hazardous_asteroid);

    // should call twillio service.
    if (validThreats[0]) console.log(true);
}

module.exports = {checkAsteroidThreat}