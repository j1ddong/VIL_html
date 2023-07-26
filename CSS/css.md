CSS is the language we use to style an HTML document.

1. External CSS
   
   > Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.
   
   ```html
   <!DOCTYPE html>
   <html>
   <head>
   <link rel="stylesheet" href="mystyle.css">
   </head>
   <body>
   
   <h1>This is a heading</h1>
   <p>This is a paragraph.</p>
   
   </body>
   </html>
   ```

2. Internal CSS

> An internal style sheet may be used if one single HTML page has a unique style.
> 
> The internal style is defined inside the <style> element, inside the head section.

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

3. Inline CSS

> An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

```html
<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>
```

## Selectors

1. id selector
   
   ```css
   #id_value { style properties }
   ```

2. class selector
   
   ```css
   .class {style properties}
   ```

3. element selector
   
   ```css
   tag {style properties}
   ```

4.  all elements
   
   ```css
   * {style properties}
   ```

## @keyframes

> The `@keyframes` rule specifies the animation code.

- Specify when the style change will happen in percent, or with the keywords "from" and "to", which is the same as 0% and 100%. 0% is the beginning of the animation, 100% is when the animation is complete.

```css
@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}
```

## Flexbox

- `flex-direction`: row, row-reverse, column, column-reverse
