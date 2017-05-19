var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            location: 'Zagreb',
            temp: 28
        }
    },
    handleLocationUpdate: function(location) {
        var that = this;
        OpenWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp
            });
        }, function(err){
            alert(err);
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