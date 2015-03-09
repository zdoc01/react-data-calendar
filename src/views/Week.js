var React = require("react");
var Day = require("./Day");

var Week = React.createClass({
	render: function() {
		var data = this.props.data || {};
		var dates = this.props.dates, days = [];
		for (var i = 0; i < dates.length; i++) {
			var key = "date-" + i;
			var date = dates[i].date;
			var items = (data.days && data.days[date+'']) ? data.days[date+''] : [];

			days.push(<Day date={date} currMonth={dates[i].currMonth} items={items} key={key} />);
		}

		return (
			<div className="row grid-row week">
				{days}
			</div>
		);
	}
});

module.exports = Week;