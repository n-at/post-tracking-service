var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="initial-message">
                <div className="alert alert-info">
                    <p className="lead">
                        Enter your Track ID into the text field above and hit &quot;Track&quot;!
                    </p>
                </div>
            </div>
        );
    }    
});
