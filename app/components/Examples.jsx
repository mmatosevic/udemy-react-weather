var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => 
<div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Few example locations to try out</p>
    <ol>
        <li><Link to='/?location=Zagreb'>Zagreb, HR</Link></li>
        <li><Link to='/?location=Davor'>Davor, HR</Link></li>
        <li><Link to='/?location=Fargo'>North Dakota, USA</Link></li>
    </ol>
</div>;

module.exports = Examples;