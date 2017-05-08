import React from 'react'
import _ from 'lodash'

import ResultItem from './ResultItem'

export default class ResultsList extends React.Component {
    render() {
        let items = _.map(_.reverse(this.props.data), function(operation) {
            return (
                <ResultItem key={operation.date} item={operation}/>
            );
        });

        return (
            <div className="results-list">
                <p className="lead">Track for {this.props.trackId}</p>

                <ul className="list-group">
                    {items}
                </ul>
            </div>
        );
    }
}

ResultsList.defaultProps = {
    trackId: '',
    data: [],
};
