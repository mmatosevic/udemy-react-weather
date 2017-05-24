var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => 
    <ul>
        <li><IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/'>Weather</IndexLink></li>
        <li><Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/about'>About</Link></li>
        <li><Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/examples'>Examples</Link></li>
    </ul>
;

module.exports = Nav;