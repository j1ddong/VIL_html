# Rendering method

## 1. Client-side rendering(CSR)

> A technique for rendering web content on the client-side, i.e, in ther user's browser

### How does client-side rendering work?

- By using JavaScript to dynamically create and modify the HTML and CSS on the page.
1. A user requests a page from a server. 

2. The server sends a minimal HTML page, necessary JavaScript and CSS files.

3. The client's browser loads the HTML page and executes the JavaScript code that requests an API or other data source to fetch the data needed to render the page.

### Pros

- After the page has been loaded for the first time, navigating to other pages on the same website is typically faster, as only necessary data needs to be fetched, and JavaScript can re-render parts of the page without requiring a full page refresh.

### Cons

- CSR can impact SEO. Some search engine crawlers might not execute JavaScript and therefore only see the initial empty or loading state of an application.

---

## 2. Server-side rendering(SSR)

> The page HTML is generated on each request

### How does client-side rendering work?

1. A user requests a page from a server.

2. The server generates an HTML file with the necessary data and styles based on the request that comes from the front end.

3. The server sends the HTML file as a response to the browser, and the browser executes the HTML and displays the page.

### Pros

- Fast initial load and SEO-friendliness. Because the server's response to the page request is a rendered HTML file.

### Cons

- The slower transition between pages compared to web apps rendered in the browser. When a user needs to switch between the pages of a server-side rendered website, each page is rendered from scratch, even if the differences between pages are minimal.

---

## 3. Static Site Generation(SSG)

> If a page uses **Static Generation**, the page HTML is generated at **build time**. This HTML will then be reused on each request. It can be cached by a CDN.

### Pros

- Fast performance, Lighter backend. Static site generators create web pages in advance
