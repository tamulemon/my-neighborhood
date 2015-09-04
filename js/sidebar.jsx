var React = require('react');
var Intro = require('./intro.jsx');

var Sidebar = module.exports = React.createClass({
	showSidebar: function() {
									var sb = document.getElementById('sidebar');
									sb.classList.toggle('show');
							},

	render: function() {
		return (
			<aside id='sidebar' className='show'>
				<button id='controller' onClick={this.showSidebar}> &lt; </button>
				<Intro />
				<div id='allGraphsContainer'>
					<h1 id='hoodName'></h1>
					<h4 id='hoodIncome'></h4>
					<article className='graphWrap' id='relationshipContainer'>
						<h1>Relationship Status</h1>
					</article>
					<article className='graphWrap' id='buildYearContainer'>
						<h1>Year Built</h1>
					</article>
					<article className='graphWrap' id='ageContainer'>
						<h1>Age Distribution</h1>
					</article>
					<article className='graphWrap' id='commuteContainer'>
						<h1>Average Commute Time</h1>
					</article>
				</div>
			</aside>
		)
	}

});
