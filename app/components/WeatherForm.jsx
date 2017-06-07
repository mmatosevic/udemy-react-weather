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
                    <input type="search" ref="location" placeholder="Search weather"></input>
                    <button className="button expanded hollow">Get weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;