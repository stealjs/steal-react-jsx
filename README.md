# steal-react-jsx

[![Build Status](https://travis-ci.org/stealjs/steal-jsx.svg?branch=master)](https://travis-ci.org/stealjs/steal-jsx)

This stealJS extension let you stel `*.jsx` files.


File contents can take either of these forms:

__ES6__
```javascript
export default function(ctx){
  return <div>Hello, {ctx.name}!</div>;
}
```

__JSX__

```html
<div>Hello, {ctx.name}!</div>
```
