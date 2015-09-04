var React = require('react');

var Header = require('./header.jsx');
var MapContainer = require('./mapContainer.jsx');
var Sidebar = require('./sidebar.jsx');

var App = React.createClass({
	render: function() {
		return (
			<main>
        <Header />
  			<MapContainer />
    		<Sidebar />
			</main>
		)
	}
});

React.render(<App appName="MyHood" />, document.getElementById('content'));
