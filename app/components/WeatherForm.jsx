var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var location = this.refs.location.value;
        if(location.length > 0){
            this.refs.location.value = '';
            this.props.onLocationUpdate(location);
        }
    },
    render: function() {
        return(
            <div>
                <p>Location (City)</p>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"></input>
                    <button>Get weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;