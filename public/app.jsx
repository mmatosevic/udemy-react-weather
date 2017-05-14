var React = require('react');
var ReactDOM = require('react-dom');
var TextInput = require('./components/UserInput');
var Title = require('./components/UserInfoDisplay');

var Application = React.createClass({
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


ReactDOM.render(
    <Application text="Those are mine titles!"/>,
    document.getElementById('app')
);