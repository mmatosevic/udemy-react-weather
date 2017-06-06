var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleLocationUpdate: function(location) {
        var that = this;

        this.setState({
            isLoading: true
        });

        OpenWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(err){
            alert(err);
            that.setState({
                isLoading: false
            });
        });
    },
    render: function() {
        var {location, temp, isLoading} = this.state;

        function renderMessage() {
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>
            }else if(temp && location){
                return <WeatherMessage location={location} temperature={temp}/>
            }
        }

        return(
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onLocationUpdate={this.handleLocationUpdate}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;