var Title = React.createClass({
    render: function() {
        return (
            <div>
                <h2>ReactAPP</h2>
                <p>{this.props.text}</p>
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
        this.props.onNewName(name);
    },
    render: function() {
        return (
            <form onSubmit={this.submitText}>
                <input type="text" ref="name"/>
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
        return {text: this.props.text}
    },
    handleNewName: function(name){
        this.setState({
            text: name
        });
    },
    render: function() {
        return (
            <div>
                <Title text={this.state.text}/>
                <TextInput onNewName={this.handleNewName}/>
            </div>
        )
    }
});


ReactDOM.render(
    <Application text="Those are mine titles!"/>,
    document.getElementById('app')
);