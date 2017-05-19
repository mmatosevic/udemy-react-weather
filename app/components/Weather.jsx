var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            location: 'Zagreb',
            temp: 28
        }
    },
    handleLocationUpdate: function(location) {
        this.setState({
            location: location,
            temp: 30
        });
    },
    render: function() {
        return(
            <div>
                <WeatherForm onLocationUpdate={this.handleLocationUpdate}/>
                <WeatherMessage location={this.state.location} temperature={this.state.temp}/>
            </div>
        )
    }
});

module.exports = Weather;