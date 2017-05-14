var React = require('react');

var WeatherForm = React.createClass({
    render: function() {
        return(
            <div>
                <p>Location</p>
                <form>
                    <input type="text"></input>
                    <button>Get weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;