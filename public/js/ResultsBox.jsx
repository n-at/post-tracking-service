var React = require('react');

var LoadingMessage = require('./messages/LoadingMessage.jsx');
var ErrorMessage = require('./messages/ErrorMessage.jsx');
var NotFoundMessage = require('./messages/NotFoundMessage.jsx');
var ResultsList = require('./ResultsList.jsx');

//TODO

module.exports = React.createClass({
    render: function() {
        return (
            <div className="results-box">
                ResultsBox
                <LoadingMessage/>
                <ErrorMessage/>
                <NotFoundMessage/>
                <ResultsList/>
            </div>
        );
    }
});