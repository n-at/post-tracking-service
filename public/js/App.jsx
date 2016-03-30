var React = require('react');

var SearchBox = require('./SearchBox.jsx');
var ResultsBox = require('./ResultsBox.jsx');

//TODO

module.exports = React.createClass({
    processTrackId: function(trackId) {
        console.log('TrackId: ' + trackId);
    },

    render: function() {
        return (
            <div className="application">
                <SearchBox ontrackid={this.processTrackId} />
                <ResultsBox/>
            </div>
        );
    }
});
