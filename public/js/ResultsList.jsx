var React = require('react');

var ResultItem = require('./ResultItem.jsx');

//TODO

module.exports = React.createClass({
    render: function() {
        return (
            <div className="results-list">
                ResultsList
                <ResultItem/>
            </div>
        );
    }
});