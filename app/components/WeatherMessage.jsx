var React = require('react');

var WeatherMessage = React.createClass({
    toCelsius: function(kelvin){
        return kelvin - 273.15;
    },
    render: function() {
        return(
            <p>It's {this.toCelsius(this.props.temperature)}C in {this.props.location}</p>
        )
    }
});

module.exports = WeatherMessage;