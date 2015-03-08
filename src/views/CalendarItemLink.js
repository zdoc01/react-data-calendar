var React = require("react");

var CalendarItemLink = React.createClass({
	render: function() {
		var item = this.props.item;
		return (
			<a href={item.url} target="_blank" title={item.text}>{item.text}</a>
		);
	}
});

module.exports = CalendarItemLink;