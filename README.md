# steal-react-jsx

[![Build Status](https://api.travis-ci.org/stealjs/steal-react-jsx.svg?branch=master)](https://travis-ci.org/stealjs/steal-react-jsx)

This stealJS extension let you steal `*.jsx` files.
`Steal-react-jsx` use [Babel's react present](http://babeljs.io/docs/plugins/preset-react/) to transform `*.jsx` files.


## Usage

It is up to you if you are using `steal-react-jsx` to import a renderer function or a React Component.

### Import a renderer function
If you would like to import a `.jsx` template to your app, you can simply use one of the module loader syntax like `es6`, `commonjs` or `steal`.
For example (es6):
```
import renderer from "my-jsx-template.jsx";
```

Your template can be either a javascript module or plain HTML.

####  Javascript Module
If you are writing the template as a javascript module you have to make sure you set a __default export__.
The exported function have to return the HTML string.

```javascript
export default function(ctx){
  return <div>Hello, {ctx.name}!</div>;
}
```

#### Plain HTML
You can import a `.jsx` file thats content is plain HTML. `steal-react-jsx` does convert it into a renderer function for you.
__We expect that the content of the `.jsx` file is proper HTML and starts with a HTML tag !__

That works!
```html
<div>Hello, {ctx.name}!</div>
```

That __doesn't__ works!
```html
Hello, {ctx.name}!
```

You have access to the component's context by using the `ctx` object in your template.

### Import React Component
If you want to import a whole React component written in `jsx` you can simply import it into your app.

__app.js__
```
import "react-component.jsx";
```
__react-component.jsx__
```
import React from 'react';
import ReactDOM from 'react-dom';

let Component = React.createClass({
    render: function () {
        return (
            <div>my component!</div>
        );
    }
});

ReactDOM.render(
    <Component />,
    document.getElementById('demo')
)
```
