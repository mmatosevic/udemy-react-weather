var React = require('react');

var Title = React.createClass({
    render: function() {
        return (
            <div>
                <h2>ReactAPP</h2>
                <p>{this.props.text}</p>
                <p>{this.props.email}</p>
            </div>
        );
    }
});

module.exports = Title;