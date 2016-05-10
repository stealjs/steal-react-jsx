import F from 'funcunit';
import QUnit from 'steal-qunit';
import React from 'react';
import ReactDOM from 'react-dom';
import rendererFromES6 from './templates/template-es6.jsx';
import rendererFromJSX from './templates/template.jsx';

F.attach(QUnit);

QUnit.module('steal-jsx');


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
