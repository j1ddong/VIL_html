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

14. `input`
    The `<input>` tag specifies an input field where the user can enter data.
    
    `type=text` is the default value
    
    ```html
    <form action="/action_page.php">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
      <input type="submit" value="Submit">
    </form>
    ```

15. `form`
    
    The `<form>` tag is used to create an HTML form for user input.

16. `img`
    
    The `<form>` tag is used to create an HTML form for user input.
    
    - src - Specifies the path to the image
    - alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed

17. `table`
    
    The `<table>` tag defines an HTML table.
    
    An HTML table consists of one `<table>` element and one or more , <tr>, <th> and <td> elements.
    
    The <tr> element defines a table row, the <th> element defines a table header, and the <td> element defines a table cell.
    
    An HTML table may also include [<caption>](https://www.w3schools.com/tags/tag_caption.asp), [<colgroup>](https://www.w3schools.com/tags/tag_colgroup.asp), [<thead>](https://www.w3schools.com/tags/tag_thead.asp), [<tfoot>](https://www.w3schools.com/tags/tag_tfoot.asp), and [<tbody>](https://www.w3schools.com/tags/tag_tbody.asp) elements.
    
    <table>  
      <tr>  
        <th>Month</th>  
        <th>Savings</th>  
      </tr>  
      <tr>  
        <td>January</td>  
        <td>$100</td>  
      </tr>  
    </table>

```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
```

18. `ol` & `ul`
    
    The `<ol>` tag defines an ordered list. An ordered list can be numerical or alphabetical.
    
    The `<ul>` tag defines an unordered (bulleted) list.
    
    The <li> tag is used to define each list item.
    
    <ol>  
      <li>Coffee</li>  
      <li>Tea</li>  
      <li>Milk</li>  
    </ol>
    
    <ul>  
      <li>Coffee</li>  
      <li>Tea</li>  
      <li>Milk</li>  
    </ul>
    
    ```html
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </o<ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>l>
    
    ```
