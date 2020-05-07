const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=db28f7fa7abcdad6f8a0b9773208455a&units=metric`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}