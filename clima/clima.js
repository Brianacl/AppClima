const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b6640851cd2e602aca278f4e0408252d`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}