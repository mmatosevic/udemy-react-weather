var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7425a4c8c528db18fa06c73f919db2d0';
// 7425a4c8c528db18fa06c73f919db2d0
// q=London,uk&

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error("Unable tofetch weather info");
            }else{
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error("Unable tofetch weather info");
        });
    }
}