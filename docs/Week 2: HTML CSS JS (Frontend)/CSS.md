# 📘 Styling Your Webpages With CSS & Bootstrap

## Table of Contents
1. [Introduction to CSS](#introduction-to-css)
2. [CSS Syntax](#css-syntax)
3. [CSS Box Model](#css-box-model)
4. [CSS Selectors](#css-selectors)
5. [Basic CSS Properties](#basic-css-properties)
6. [CSS Flexbox](#css-flexbox)
7. [CSS Grid](#css-grid)
8. [Copying & Pasting CSS](#copying--pasting-css)
9. [Bootstrap CSS Basics](#bootstrap-css-basics)
10. [Conclusion](#conclusion)

---

## 📌 Introduction to CSS
**CSS** (Cascading Style Sheets) is used to style and layout web pages. It controls the appearance of HTML elements, allowing you to customize colors, fonts, layouts, and more.

---

## ✏️ CSS Syntax
```css
selector {
  property: value;
}
```

### Example
```css
p {
  color: blue;
  font-size: 18px;
}
```

---

## 📦 CSS Box Model
The CSS **Box Model** determines how elements are structured on a page. Every HTML element is a rectangular box, defined by the following layers:

1. **Content**: The actual text or images inside the box.
2. **Padding**: Space between the content and the border.
3. **Border**: The line around the padding and content.
4. **Margin**: Space outside the border.

### Example
```html
<div class="box">Hello, Box Model!</div>
```

```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid #3498db;
  margin: 15px;
  box-sizing: border-box;
}
```

---

## 🧩 CSS Selectors
Selectors are used to target HTML elements for styling.

### Basic Selectors
- **Element Selector**: Targets all elements of a given type.
  ```css
  h1 {
    color: green;
  }
  ```
- **Class Selector**: Targets elements with a specific class.
  ```css
  .highlight {
    background-color: yellow;
  }
  ```
- **ID Selector**: Targets elements with a specific ID.
  ```css
  #header {
    text-align: center;
  }
  ```

---

## 🎨 Basic CSS Properties
### Text Properties
- `color`: Changes the text color.
- `font-size`: Sets the size of the font.
- `text-align`: Aligns text.

### Background Properties
- `background-color`: Sets the background color.
- `background-image`: Adds a background image.

### Box Model Properties
- `margin`: Space outside of an element.
- `padding`: Space inside of an element.
- `border`: Creates a border around an element.

---

## 📐 CSS Flexbox
The **Flexbox** layout simplifies aligning elements in a container.

### Example
```html
<div class="flex-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

### Key Flexbox Properties
- **justify-content**: Aligns items horizontally (`flex-start`, `center`, `space-between`).
- **align-items**: Aligns items vertically (`stretch`, `center`).
- **flex-direction**: Defines the direction of items (`row`, `column`).

---

## 🗂️ CSS Grid
The **CSS Grid** is a powerful system for creating two-dimensional layouts.

### Example
```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
```

### Key Grid Properties
- **grid-template-columns**: Defines columns.
- **gap**: Space between rows and columns.
- **grid-column / grid-row**: Controls item placement.

---

## 📋 Copying & Pasting CSS
1. Open the webpage in a browser (e.g., Chrome).
2. Right-click an element and select **"Inspect"**.
3. Copy the CSS from the **Styles** panel.
4. Paste it into your stylesheet.

---

## 🎨 Bootstrap CSS Basics
Bootstrap is a popular CSS framework that helps you create responsive, mobile-first designs.

### 🛠 Getting Started
Add Bootstrap to your HTML:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
```

---

### 🧱 Responsive Grid System
Bootstrap uses a 12-column grid system with breakpoints for different screen sizes.

#### Example
```html
<div class="container">
  <div class="row">
    <div class="col-sm-4">Column 1</div>
    <div class="col-sm-4">Column 2</div>
    <div class="col-sm-4">Column 3</div>
  </div>
</div>
```

### Responsive Columns
```html
<div class="row">
  <div class="col-12 col-md-6">50% on medium screens</div>
  <div class="col-12 col-md-6">50% on medium screens</div>
</div>
```

---

### 🔧 Bootstrap Components

#### 1. **Buttons**
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
```

#### 2. **Cards**
```html
<div class="card" style="width: 18rem;">
  <img src="image.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some text here.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

#### 3. **Navbar**
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Brand</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
    </ul>
  </div>
</nav>
```

---

## 🏁 Conclusion
Congratulations! You've learned the basics of CSS, Flexbox, Grid, and Bootstrap. Keep experimenting with these tools to create responsive, modern web designs. Happy coding! 🚀

