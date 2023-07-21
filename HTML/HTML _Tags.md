# HTML Tags1

## 1. head

## 2. body

1. `<h>` 
   
   The `<h1>` to `<h6>` tags are used to define HTML headings

```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
```

2. `<p>`
   
   The HTML `<p>` element defines a paragraph
   
   A paragraph always starts on a new line, and browsers automatically add some white space(a margin) before and after a paragraph

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

3. `<b>`
   
   The `<b>` tag specifies bold text without any extra importance.

```html
<p>This is normal text - <b>and this is bold text</b>.</p>
```

4. `<i>`
   
   The `<i>` tag defines a part of text in an alternate voice or mood. The content inside is typically displayed in *italic*.
   
   <p>This is normal text - <i>and this is italic text</i></p>

```html
<p>This is normal text - <i>and this is italic text</i></p>. 
```

5. `<u>`
   
   The `<u>` tag represents some text that is unarticulated and styled differently from normal text, such as misspelled words or proper names in Chinese text
   
   <p>This is some <u>mispeled</u> text</p>
   
   ```html
   <p>This is some <u>mispeled</u> text</p>
   ```

6. `<strong>`
   
   The `<strong>` tag is used to define text with strong importance. The content inside is typically displayed in **bold**.
   
   <strong>This text is important</strong>

```html
<strong>This text is important</strong>
```

7. `<em>`
   
   The `<em>` tag is used to define emphasized text. The content inside is typically displayed in *italic*.
   
   <p>We <em>cannot</em> live like this </p>
   
   ```html
   <p>We <em>cannot</em> live like this.</p>
   ```

8. `<small>`
   
   The `<small>` tag defines smaller text (like copyright and other side-comments).
   
   <p>This is some normal text </p>
   
   <p><small>This is some smaller text</small></p>
   
   ```html
   <p>This is some normal text.</p>
   <p><small>This is some smaller text.</small></p>
   ```

9. `<mark>`
   
   The `<mark>` tag defines text that should be marked or highlighted.
   
   <p>Do not forget to buy <mark>milk</mark> today.</p>

```html
<p>Do not forget to buy <mark>milk</milk> today </p>
```

10. `del` & `ins`
    
    - The `<del>` tag defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.
    
    - The `<ins>` tag defines a text that has been inserted into a document. Browsers will usually underline inserted text.
    
    <p>My favorite color is <del>blue</del> <ins>red</ins>!</p>

```html
<p>My favorite color is <del>blue</del></p>
```

11. `a`
    
    The `<a>` tag defines a hyperlink, which is used to link from one page to another.
    
    The most important attribute of the `<a>` element is the `href` attribute, which indicates the link's destination.

```html
<a href="https://www.w3schools.com">Visit W3Schools.com!</a>
```

12. `button`
    
    The `<button>` tag defines a clickable button.
    
    <button type="button">Click Me!</button>

```html
<button type="button">Click Me!</button>
```

13. `label`
    
    The `<label>` tag defines a label for several elements
    
      <label for="html">HTML</label>
    
    ```html
    <input type="radio" id="html" name="fav_language" value="HTML">
      <label for="html">HTML</label><br>
    ```
