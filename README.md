# react-data-calendar
React calendar component. Displays daily events for each month.

## Setup
This package is available via npm:

```bash
$ npm install react-data-calendar
```

Simply import the component into your application and render with React:

```javascript
var React = require("react");
var Calendar = require("react-data-calendar");

React.render(<Calendar />, document.body);
```

Already have the events? Fantastic! Here's how you could display them:

```javascript
var React = require("react");
var Calendar = require("react-data-component");

var ITEMS = {
	months: {
		// January
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

		// March
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

React.render(<Calendar data={ITEMS} />, document.body);
```

Styles for ```react-data-calendar``` are found in ```dist/styles.css```.

**NOTE** - This is still a work-in-progress and subject to change.

## Development

You can build both the src JS and LESS with the npm ```build``` script:

```bash
$ npm run-script build
```

Or, build them separately:

```bash
// build JS
$ npm run-script build-js

// build LESS
$ npm run-script build-less
```