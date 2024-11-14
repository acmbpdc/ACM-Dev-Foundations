# Introduction to HTML

## Table of Contents
1. [What is HTML?](#what-is-html)
2. [Basic Structure of an HTML Document](#basic-structure-of-an-html-document)
3. [HTML Elements](#html-elements)
4. [HTML Tags](#html-tags)
5. [Common HTML Elements](#common-html-elements)
   - [Headings](#headings)
   - [Paragraphs](#paragraphs)
   - [Links](#links)
   - [Images](#images)
   - [Lists](#lists)
6. [Attributes in HTML](#attributes-in-html)
7. [HTML Forms](#html-forms)
8. [HTML Comments](#html-comments)
9. [Semantic HTML](#semantic-html)
10. [Conclusion](#conclusion)

---

## What is HTML?
HTML (HyperText Markup Language) is the standard markup language used to create web pages. It defines the structure of a web page using a series of elements and tags. HTML forms the foundation of most web content, allowing text, images, links, and multimedia to be structured and displayed in web browsers.

---

## Basic Structure of an HTML Document
Here’s a simple example of an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a simple HTML document.</p>
</body>
</html>
```

### Explanation
- `<!DOCTYPE html>`: Specifies the HTML version (HTML5).
- `<html>`: The root element of an HTML page.
- `<head>`: Contains meta-information like title, character set, and more.
- `<title>`: The title displayed on the browser tab.
- `<body>`: The main content of the webpage.

---

## HTML Elements
An HTML element usually consists of:
1. **Opening tag**: `<tag>`
2. **Content**: The information inside the tag.
3. **Closing tag**: `</tag>`

Example:
```html
<p>Hello, World!</p>
```

### Self-Closing Tags
Some HTML elements do not have closing tags:
```html
<img src="logo.png" alt="Logo">
<br>
```

---

## HTML Tags
HTML tags are used to define elements on a web page. They are usually enclosed within angle brackets (`<` and `>`). Tags are not case-sensitive, but it's a best practice to write them in lowercase.

---

## Common HTML Elements

### Headings
Headings are defined with `<h1>` to `<h6>` tags, with `<h1>` being the highest level and `<h6>` the lowest.

```html
<h1>Main Heading</h1>
<h2>Sub-heading</h2>
<h3>Section Heading</h3>
```

### Paragraphs
Paragraphs are defined using the `<p>` tag.

```html
<p>This is a paragraph.</p>
```

### Links
To create a hyperlink, use the `<a>` tag:

```html
<a href="https://example.com" target="_blank">Visit Example</a>
```

### Images
To include images, use the `<img>` tag:

```html
<img src="image.jpg" alt="Description of the image" width="400">
```

### Lists
#### Unordered Lists
```html
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>
```

#### Ordered Lists
```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

---

## Attributes in HTML
Attributes provide additional information about HTML elements. They are placed inside the opening tag.

Example:
```html
<a href="https://example.com" target="_blank" title="Example Site">Click Here</a>
```

### Common Attributes
- `href`: URL for links
- `src`: Source file for images and videos
- `alt`: Alternative text for images
- `id`: Unique identifier for an element
- `class`: Class name for styling multiple elements
- `style`: Inline CSS for styling

---

## HTML Forms
Forms collect user input and send it to a server for processing.

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <input type="submit" value="Submit">
</form>
```

### Explanation
- `<form>`: The form container.
- `action`: URL where form data is sent.
- `method`: HTTP method (GET, POST).
- `<input>`: Collects user data.
- `<label>`: Label for form fields.

---

## HTML Comments
Comments in HTML are added using `<!-- -->`. They are not visible to users but help developers understand the code.

```html
<!-- This is a comment -->
```

---

## Semantic HTML
Semantic HTML uses meaningful tags to improve accessibility and SEO. Examples include:

```html
<header>Website Header</header>
<nav>Navigation Links</nav>
<main>Main Content Area</main>
<footer>Website Footer</footer>
```

### Non-Semantic vs. Semantic
```html
<!-- Non-semantic -->
<div id="header">Header</div>

<!-- Semantic -->
<header>Header</header>
```

---

## Conclusion
HTML is the backbone of web development, forming the structure of web pages. By mastering HTML, you can start building your own websites and web applications. Combine HTML with CSS and JavaScript to create dynamic, responsive, and interactive content.

---

Happy coding! 🚀

