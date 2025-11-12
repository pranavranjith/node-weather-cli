const axios = require('axios');

const getWeather = async (city) => {
    try {
        const response = await axios.get(`https://wttr.in/${city}?format=3`);
        console.log("The Weather: "+response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
};

const main = () => {
    const city = process.argv[2];
    if (!city) {
        console.log('Please provide a city name.');
        process.exit(1);
    }
    getWeather(city);
};

main();