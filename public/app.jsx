var Title = React.createClass({
    getDefaultProps: function() {
        return {text: "Untitled"}
    },
    getInitialState: function() {
        return {text: this.props.text}
    },
    sendForm: function(e){
        e.preventDefault();
        var nameInput = this.refs.name;
        var name = nameInput.value;
        nameInput.value = '';

        if (typeof name === 'string' && name.length > 0){
            this.setState({
                text: name
            });
        }
    },
    render: function() {
        return (
            <div>
                <h2>ReactAPP</h2>
                <p>{this.state.text}</p>
                <form onSubmit={this.sendForm}>
                    <input type="text" ref="name"/>
                    <button>Send</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <Title text="Those are mine titles!"/>,
    document.getElementById('app')
);