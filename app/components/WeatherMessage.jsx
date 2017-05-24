var React = require('react');

var WeatherMessage = (props) => {
        var toCelsius = function(kelvin){
            return kelvin - 273.15;
        };
        return(
            <p>It's {toCelsius(props.temperature)}C in {props.location}</p>
        )
};

module.exports = WeatherMessage;