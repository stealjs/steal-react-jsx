import React from 'react';
import ReactDOM from 'react-dom';

let Component = React.createClass({
	render: function () {
		return (
			<div>works!</div>
		);
	}
});

ReactDOM.render(
	<Component />,
	document.getElementById('qunit-fixture')
)