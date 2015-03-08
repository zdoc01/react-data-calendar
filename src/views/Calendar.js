var React = require("react");
var Header = require("./Header");
var Grid = require("./Grid");

/**
 * @class
 * 
 * Main Calendar class. Builds the Calendar component
 * using sub Header and Grid components. Default state
 * is an empty calendar with no items.
 * 
 * @prop data (optional) Calendar items to be displayed for specific dates. 
 *       				 See docs for expected data structure.
 */
var Calendar = React.createClass({
	getInitialState: function() {
		return {
			currMonth: (new Date()).getMonth(),
			currYear: (new Date()).getFullYear() 
		};
	},

	prevMonth: function(event) {
		var month = this.state.currMonth;
		var prev = (month > 0) ? month-1 : 11;
		this.setState({currMonth: prev});
	},

	nextMonth: function(event) {
		var month = this.state.currMonth;
		var next = (month < 11) ? month+1 : 0;
		this.setState({currMonth: next});
	},

	render: function() {
		var data = this.props.data || {};
		return (
			<div>
				<Header month={this.state.currMonth} year={this.state.currYear} onPrevMonth={this.prevMonth} onNextMonth={this.nextMonth} />
				<Grid month={this.state.currMonth} data={data} />
			</div>
		);
	}
});

module.exports = Calendar;