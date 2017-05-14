var React = require('react');

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

module.exports = TextInput;