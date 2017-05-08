import React from 'react'

export default class InitialMessage extends React.Component {
    render() {
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
}
