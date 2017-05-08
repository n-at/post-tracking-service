import React from 'react'

/**
 * A form for Track ID input
 */
export default class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trackId: '',
        };
    }

    /**
     * Process change of track id in form
     * @param e
     */
    handleTrackIdChange(e) {
        this.setState({trackId: e.target.value});
    }

    /**
     * Process track form submit event
     * Call ontrackid callback
     * @param e
     */
    handleTrackIdSubmit(e) {
        e.preventDefault();

        let trackId = this.state.trackId.trim();

        if(trackId) {
            this.props.ontrackid(trackId);
        }
    }

    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.handleTrackIdSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-xs-10">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Track ID"
                                   autoFocus={true}
                                   onChange={this.handleTrackIdChange.bind(this)} />
                        </div>
                        <div className="col-xs-2">
                            <button type="submit"
                                    className="btn btn-block btn-primary">
                                Track
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }    
}

SearchBox.defaultProps = {
    ontrackid: () => {},
};
