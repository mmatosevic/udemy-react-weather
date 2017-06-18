var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        var loc = this.refs.location.value;
        var encodedLocation = encodeURIComponent(loc);

        if(loc.length > 0) {
            this.refs.location.value = '';
            window.location.hash = '#/?location='+encodedLocation;
        }
    },
    render: function() {
        return (
            <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">WeatherMan Turbo SmartApp</li>
                    <li><IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/'>Weather</IndexLink></li>
                    <li><Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/about'>About</Link></li>
                    <li><Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/examples'>Examples</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                    <ul className="menu">
                        <li><input type="search" placeholder="Location" ref="location"/></li>
                        <li><input type="submit" className="button" value="Get weather"/></li>
                    </ul>
                </form>
            </div>
            </div>
        )
    }
});

module.exports = Nav;