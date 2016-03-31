var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var App = require('./App.jsx');

$(function() {
    var container = document.getElementById('content');
    ReactDOM.render(<App/>, container);
});
