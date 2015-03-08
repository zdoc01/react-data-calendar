var React = require("react");
var Calendar = require("./views/Calendar");

var CALENDAR_ITEMS = {
	months: {
		"0": {
			days: {
				"1": [
					{link: true, url: "http://google.com", text: "A link to content"},
					{link: false, url: null, text: "Some other content"}
				],
				"2": [
					{link: false, url: null, text: "Some other content"}
				]
			}
		},
		"2": {
			days: {
				"7": [
					{link: true, url: "http://google.com", text: "A link to content"},
					{link: false, url: null, text: "Some other content"}
				],
				"20": [
					{link: false, url: null, text: "Some other content"}
				]
			}
		}
	}
};

var app = document.getElementById("app");
React.render(<Calendar data={CALENDAR_ITEMS}/>, app);