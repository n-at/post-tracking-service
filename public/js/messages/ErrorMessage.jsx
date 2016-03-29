var React = require('react');

//TODO

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            message: 'Unknown error'
        };
    },

    render: function() {
        return (
            <div className="error-message">
                {this.props.message}
            </div>
        );
    }
});
