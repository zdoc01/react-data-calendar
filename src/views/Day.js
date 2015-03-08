var React = require("react/addons");
var CalendarItem = require("./CalendarItem");
var CalendarItemLink = require("./CalendarItemLink");

var Day = React.createClass({
	render: function() {
		var cx = React.addons.classSet;
		var classes = cx({
			"date": true,
			"current-month": this.props.currMonth
		});
		
		var calItems = [];
		var items = this.props.items;
		for (var i = 0; i < items.length; i++) {
			var key = "item-" + i;

			if (items[i].link) {
				calItems.push(<CalendarItemLink item={items[i]} key={key} />);	
			} else {
				calItems.push(<CalendarItem item={items[i]} key={key} />);
			}
			
		}

		return (
			<div className="col-lg-1-7 day">
				<p className={classes}>{this.props.date}</p>
				{calItems}
			</div>
		);
	}
});

module.exports = Day;