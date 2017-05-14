var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
    render: function() {
        return(
            <ul>
                <li><Link to='/'>Weather</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/examples'>Examples</Link></li>
            </ul>
        )
    }
});

module.exports = Nav;