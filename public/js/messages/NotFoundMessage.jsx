var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="not-found-message">
                <div className="alert alert-info">
                    <p className="lead">
                        No information about this Track ID found.
                    </p>
                </div>
            </div>
        );
    }
});
