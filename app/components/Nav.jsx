var React = require('react');

var Nav = React.createClass({
    render: function() {
        return(
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Examples</a></li>
            </ul>
        )
    }
});

module.exports = Nav;