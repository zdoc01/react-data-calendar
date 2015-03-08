var React = require("react");
var Week = require("./Week");

var Grid = React.createClass({
	render: function() {
		var data = this.props.data;
		var month = this.props.month;
		var monthItems = (data && data.months) ? data.months[month+''] : {};
		var weeks = [];
		
		var d = new Date()
		  , curYear = d.getFullYear()
		  , firstDate = new Date(curYear, month, 1)
		  , lastDate = new Date(curYear, month+1, 0);

		// Generate first week - includes previous and current month dates
		var date = 0
		  , prevDate = null
		  , firstWeekDates = []
		  , firstDayOfMonth = firstDate.getDay()
		  , prevTotalDays = new Date(curYear, month, 0).getDate();

		for (var i = 0; i < 7; i++) {
			if (i >= firstDayOfMonth) {
				//current month
				firstWeekDates.push({date: ++date, currMonth: true});
			} else {
				//previous month
				prevDate = (prevTotalDays-(firstDayOfMonth-i))+1;
				firstWeekDates.push({date: prevDate, currMonth: false});
			}
		}
		weeks.push(<Week dates={firstWeekDates} data={monthItems} key="week-0" />);

		// Fill in current month dates
		var nextWeek = []
		  , current = 0
		  , weekCounter = 1
		  , dayCounter = 1
		  , key = ""
		  , currTotalDays = lastDate.getDate();

		while (current < currTotalDays) {
			current = firstWeekDates[firstWeekDates.length-1].date + dayCounter;
			nextWeek.push({date: current, currMonth: true});
			
			if (nextWeek.length === 7) {
				// We've generated a full week, so build the view and reset
				key = "week-" + weekCounter;
				weeks.push(<Week dates={nextWeek} data={monthItems} key={key} />);
				nextWeek = [];
				weekCounter++;
			}

			dayCounter++;
		}

		// Fill in next month's dates
		var j = 0;
		while (nextWeek.length < 7) {
			nextWeek.push({date: ++j, currMonth: false});
		}
		key = "week-" + weekCounter;
		weeks.push(<Week dates={nextWeek} data={monthItems} key={key} />);


		return (
			<div className="row grid">
				<div className="col-lg-12">
					<div className="row grid-row grid-header">
						<div className="col-lg-1-7">Sunday</div>
						<div className="col-lg-1-7">Monday</div>
						<div className="col-lg-1-7">Tuesday</div>
						<div className="col-lg-1-7">Wednesday</div>
						<div className="col-lg-1-7">Thursday</div>
						<div className="col-lg-1-7">Friday</div>
						<div className="col-lg-1-7">Saturday</div>
					</div>

					{weeks}

				</div>
			</div>
		);
	}
});

module.exports = Grid;