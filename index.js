const axios = require('axios');

const getWeather = async (city) => {
    try {
        const response = await axios.get(`https://wttr.in/${city}?format=j1`);
        const current = response.data.current_condition[0];
        const temp = current.temp_C;
        const description = current.weatherDesc[0].value;
        console.log(`Weather in ${city}: ${temp}°C, ${description}`);
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