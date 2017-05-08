import React from 'react'

import LoadingMessage from './messages/LoadingMessage'
import ErrorMessage from './messages/ErrorMessage'
import NotFoundMessage from './messages/NotFoundMessage'
import InitialMessage from './messages/InitialMessage'
import ResultsList from './ResultsList'

import trackApi from './utils/trackApi'

export default class ResultsBox extends React.Component {

    constructor(props) {
        super(props);

        //Set empty track history and error by default
        this.state = {
            trackHistory: null,
            trackError: null,
        };
    }

    /**
     * Call track API on properties update
     */
    componentWillReceiveProps(newProps) {
        let me = this;

        if(me.props.trackId === newProps.trackId) return;

        me.setState({
            trackHistory: null,
            trackError: null
        });

        let trackId = newProps.trackId;
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
    }

    render() {
        let trackId = this.props.trackId;
        let trackError = this.state.trackError;
        let trackHistory = this.state.trackHistory;

        if(trackError !== null) {
            return (<ErrorMessage error={trackError}/>);
        }

        if(!trackId && trackHistory === null) {
            return (<InitialMessage/>);
        }

        if(trackHistory === null) {
            return (<LoadingMessage/>);
        }

        if(trackHistory.length === 0) {
            return (<NotFoundMessage trackId={trackId} />);
        }

        return (<ResultsList trackId={trackId} data={trackHistory} />);
    }
}

ResultsBox.defaultProps = {
    trackId: '',
};
