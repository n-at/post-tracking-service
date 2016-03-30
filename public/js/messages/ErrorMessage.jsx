var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            error: {}
        };
    },

    render: function() {
        return (
            <div className="error-message">
                <div className="alert alert-danger">
                    <p className="lead">
                        Service error
                    </p>

                    <p>{this.props.error.message}</p>
                </div>
            </div>
        );
    }
});
