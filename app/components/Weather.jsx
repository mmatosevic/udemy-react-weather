var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleLocationUpdate: function(location) {
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        OpenWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(err){
            that.setState({
                isLoading: false,
                errorMessage: err.message
            });
        });
    },
    componentDidMount: function() {
        var loc = this.props.location.query.location;
        if(loc){
            this.handleLocationUpdate(loc);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps) {
        var loc = newProps.location.query.location;
        if(loc){
            this.handleLocationUpdate(loc);
            window.location.hash = '#/';
        }
    },
    render: function() {
        var {location, temp, isLoading, errorMessage} = this.state;

        function renderMessage() {
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>
            }else if(temp && location){
                return <WeatherMessage location={location} temperature={temp}/>
            }
        }

        function renderError() {
            if(errorMessage){
                return <ErrorModal message={errorMessage}/>
            }
        }

        return(
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onLocationUpdate={this.handleLocationUpdate}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;