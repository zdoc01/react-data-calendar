var React = require("react");
var Calendar = require("react-data-calendar");
var data = require("./data");

React.render(<Calendar data={data} />, document.getElementById("app"));