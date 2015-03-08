var React = require("react");

var Header = React.createClass({
	render: function() {
		var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var month = MONTHS[this.props.month];

		return (
			<div className="row month-header">
				<div className="col-lg-4 col-sm-4 col-xs-4">
					<div className="pull-left shift-month" onClick={this.props.onPrevMonth}>
						&lt;
					</div>
				</div>
				<div className="col-lg-4 col-sm-4 col-xs-4 text-center">
					{month} {this.props.year}
				</div>
				<div className="col-lg-4 col-sm-4 col-xs-4">
					<div className="pull-right shift-month" onClick={this.props.onNextMonth}>
						&gt;
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Header;