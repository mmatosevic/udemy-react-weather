var Title = React.createClass({
    render: function() {
        return (
            <h2>ReactAPP</h2>
        );
    }
});

ReactDOM.render(
    <Title/>,
    document.getElementById('app')
);