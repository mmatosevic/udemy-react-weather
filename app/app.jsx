var React = require('react');
var ReactDOM = require('react-dom');
var UserInfoSection = require('./components/UserInfoSection');

var locationInfo = {
    state: 'Croatia',
    zipCode: 10000
};

var person = {
    name: "Matija",
    ...locationInfo
};

console.info(person);

ReactDOM.render(
    <UserInfoSection text="Those are mine titles!"/>,
    document.getElementById('app')
);