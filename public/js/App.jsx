var React = require('react');

var SearchBox = require('./SearchBox.jsx');
var ResultsBox = require('./ResultsBox.jsx');

//TODO

module.exports = React.createClass({
    render: function() {
        return (
            <div className="application">
                <p>Application!</p>
                <SearchBox/>
                <ResultsBox/>
            </div>
        );
    }
});
