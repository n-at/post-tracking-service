var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {item: {}};
    },

    render: function() {
        var item = this.props.item;
        var date = new Date(item.date);
        var localizedDate = date.toLocaleString();

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
});