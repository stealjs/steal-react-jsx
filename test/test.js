import F from 'funcunit';
import QUnit from 'steal-qunit';
import React from 'react';
import ReactDOM from 'react-dom';

import rendererFromES6 from './templates/es6.jsx';
import rendererFromJSX from './templates/react-html.jsx';

QUnit.config.autostart = false;
F.attach(QUnit);

QUnit.module('steal-react-jsx');


QUnit.test('imports a renderer from an es6 export', function() {
	let HelloMessage = React.createClass({
		render: function() {
			return rendererFromES6(this);
		}
	});

	ReactDOM.render(<HelloMessage name='ES6 World' />,
		document.getElementById('qunit-fixture'));

	F('#qunit-fixture').text('Hello ES6 World!', 'Correct text is rendered.');
});



QUnit.test('imports a renderer from JSX file', function() {
	let HelloMessage = React.createClass({
		render: function() {
			return rendererFromJSX(this);
		}
	});

	ReactDOM.render(<HelloMessage name='Designers' />,
		document.getElementById('qunit-fixture'));

	F('#qunit-fixture').text('Hello Designers!', 'Correct text is rendered.');
});

QUnit.test('ifofo', function (assert) {
	var done = assert.async();
	steal.import("test/app/component.jsx").then(function(){
		assert.ok(true, "loaded");
		F('#qunit-fixture').text('works!', 'Correct text is rendered.');
		done();
	});
});
