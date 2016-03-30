var React = require('react');

var SearchBox = require('./SearchBox.jsx');
var ResultsBox = require('./ResultsBox.jsx');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            trackId: ''
        };
    },

    /**
     * Track id callback fro SearchBox
     * @param trackId
     */
    handleTrackId: function(trackId) {
        this.setState({trackId: trackId});
    },

    render: function() {
        return (
            <div className="application">
                <SearchBox ontrackid={this.handleTrackId} />
                <ResultsBox trackId={this.state.trackId} />
            </div>
        );
    }
});
