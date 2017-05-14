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
                <input type="text" ref="name"/>
                <input type="text" ref="email"/>
                <button>Send</button>
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