import React from 'react'

export default class ErrorMessage extends React.Component {
    render() {
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
}

ErrorMessage.defaultProps = {
    error: {},
};
