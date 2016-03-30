var React = require('react');

/**
 * A form for Track ID input
 */

module.exports = React.createClass({
    /**
     * Set default callback
     * @returns {{ontrackid: ontrackid}}
     */
    getDefaultProps: function() {
        return {
            ontrackid: function(){}
        };
    },

    /**
     * Set empty initial track id
     * @returns {{trackId: string}}
     */
    getInitialState: function() {
        return {
            trackId: ''
        };
    },

    /**
     * Process change of track id in form
     * @param e
     */
    handleTrackIdChange: function(e) {
        this.setState({trackId: e.target.value});
    },

    /**
     * Process track form submit event
     * Call ontrackid callback
     * @param e
     */
    handleTrackIdSubmit: function(e) {
        e.preventDefault();

        if(this.state.trackId) {
            this.props.ontrackid(this.state.trackId);
        }
    },

    render: function() {
        return (
            <div className="search-box">
                <form onSubmit={this.handleTrackIdSubmit}>
                    <div className="row">
                        <div className="col-xs-10">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Track ID"
                                   onChange={this.handleTrackIdChange} />
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
});
