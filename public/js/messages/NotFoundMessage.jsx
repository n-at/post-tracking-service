import React from 'react'

export default class NotFoundMessage extends React.Component {
    render() {
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
}
