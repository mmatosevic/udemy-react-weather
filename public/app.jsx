var React = require('react');
var ReactDOM = require('react-dom');
var UserInfoSection = require('./components/UserInfoSection');

ReactDOM.render(
    <UserInfoSection text="Those are mine titles!"/>,
    document.getElementById('app')
);