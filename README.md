# steal-jsx

Import React renderers from `*.jsx` files.

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
