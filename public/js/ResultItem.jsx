import React from 'react'

export default class ResultItem extends React.Component {
    render() {
        let item = this.props.item;
        let date = new Date(item.date);
        let localizedDate = date.toLocaleString();

        return (
            <li className="result-item list-group-item">
                <p>
                    <span className="result-date">{localizedDate}</span>
                    <span className="result-name">{item.name}</span>
                </p>
                <span className="result-address">{item.address}</span>
            </li>
        )
    }
}

ResultItem.defaultProps = {
    item: {}
};
