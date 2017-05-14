var React = require('react');
var TextInput = require('./UserInput');
var Title = require('./UserInfoDisplay');

var UserInfoSection = React.createClass({
    getDefaultProps: function() {
        return {text: "Untitled"}
    },
    getInitialState: function() {
        return {
            text: this.props.text,
            email: ''
        }
    },
    handleValueUpdate: function(values){
        this.setState({
            text: values.name,
            email: values.email
        });
    },
    render: function() {
        return (
            <div>
                <Title text={this.state.text} email={this.state.email}/>
                <TextInput onValueUpdate={this.handleValueUpdate}/>
            </div>
        )
    }
});

module.exports = UserInfoSection;