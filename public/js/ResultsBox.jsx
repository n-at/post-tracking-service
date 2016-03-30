var React = require('react');

var LoadingMessage = require('./messages/LoadingMessage.jsx');
var ErrorMessage = require('./messages/ErrorMessage.jsx');
var NotFoundMessage = require('./messages/NotFoundMessage.jsx');
var InitialMessage = require('./messages/InitialMessage.jsx');
var ResultsList = require('./ResultsList.jsx');

var trackApi = require('./utils/trackApi');

module.exports = React.createClass({

    getDefaultProps: function() {
        return {
            trackId: ''
        };
    },

    /**
     * Set empty track history and error by default
     *
     * @returns {{trackHistory: null, trackError: null}}
     */
    getInitialState: function() {
        return {
            trackHistory: null,
            trackError: null
        };
    },

    /**
     * Call track API on properties update
     */
    componentWillReceiveProps: function(newProps) {
        var me = this;

        if(me.props.trackId == newProps.trackId) return;

        me.setState({
            trackHistory: null,
            trackError: null
        });

        var trackId = newProps.trackId;
        if(!trackId) {
            return;
        }

        trackApi.trackItem(trackId, function(err, history) {
            if(!err) {
                me.setState({
                    trackHistory: history,
                    trackError: null
                });
            } else {
                me.setState({
                    trackHistory: null,
                    trackError: err
                });
            }
        });
    },

    render: function() {
        var trackId = this.props.trackId;
        var trackError = this.state.trackError;
        var trackHistory = this.state.trackHistory;

        if(trackError !== null) {
            return (<ErrorMessage error={trackError}/>);
        }

        if(!trackId && trackHistory === null) {
            return (<InitialMessage/>);
        }

        if(trackHistory === null) {
            return (<LoadingMessage/>);
        }

        if(trackHistory.length == 0) {
            return (<NotFoundMessage trackId={trackId} />);
        }

        return (<ResultsList data={trackHistory} />);
    }
});