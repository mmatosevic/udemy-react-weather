var React = require('react');
var ReactDOM = require('react-dom');

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

var TextInput = React.createClass({
    submitText: function(e) {
        e.preventDefault();
        var nameInput = this.refs.name;
        var name = nameInput.value;
        nameInput.value = '';

        var emailInput = this.refs.email;
        var email = emailInput.value;
        emailInput.value = '';
        this.props.onValueUpdate({name: name, email: email});
    },
    render: function() {
        return (
            <form onSubmit={this.submitText}>
                <div>
                    <input placeholder="Text" type="text" ref="name"/>
                </div>
                <div>
                    <input placeholder="Email" type="text" ref="email"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        )
    }
});

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