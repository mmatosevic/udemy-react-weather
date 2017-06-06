var React = require('react');

var WeatherMessage = ({temperature, location}) => {
        var toCelsius = function(kelvin){
            return kelvin - 273.15;
        };
        return(
            <p className="text-center">It's {toCelsius(temperature)}C in {location}</p>
        )
};

module.exports = WeatherMessage;