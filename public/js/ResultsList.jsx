var React = require('react');
var _ = require('lodash');

var ResultItem = require('./ResultItem.jsx');

module.exports = React.createClass({

    getDefaultProps: function() {
        return {
            trackId: '',
            data: []
        };
    },

    render: function() {
        var items = _.map(_.reverse(this.props.data), function(operation) {
            return (
                <ResultItem key={operation.date} item={operation}/>
            );
        });

        return (
            <div className="results-list">
                <p className="lead">Track for {this.props.trackId}</p>

                <ul className="list-group">
                    {items}
                </ul>
            </div>
        );
    }
});