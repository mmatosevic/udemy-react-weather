var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        return(
            <p>It's {this.props.temperature}C in {this.props.location}</p>
        )
    }
});

module.exports = WeatherMessage;