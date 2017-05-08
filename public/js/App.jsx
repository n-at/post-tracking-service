import React from 'react'

import SearchBox from './SearchBox'
import ResultsBox from './ResultsBox'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trackId: '',
        };
    }

    /**
     * Track id callback fro SearchBox
     * @param trackId
     */
    handleTrackId(trackId) {
        this.setState({trackId: trackId});
    }

    render() {
        return (
            <div className="application">
                <SearchBox ontrackid={this.handleTrackId.bind(this)} />
                <ResultsBox trackId={this.state.trackId} />
            </div>
        );
    }
}
