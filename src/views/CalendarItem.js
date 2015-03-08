var React = require("react");

var CalendarItem = React.createClass({
	render: function() {
		var text = this.props.item.text;
		return (
			<p title={text}>{text}</p>
		);
	}
});

module.exports = CalendarItem;