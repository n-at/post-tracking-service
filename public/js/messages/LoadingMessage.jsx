var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="loading-message">
                <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            </div>
        );
    }
});
