---
lang: en
title:  \<display-colors\> docs
css: display-colors.css
---

<main>

The `DisplayColors` web component is a custom element that displays a table of
colors extracted from a CSS file specified by the `src` attribute.

It also detects `@import` files and checks for colors there. 

## Usage

To use the `DisplayColors` component, follow these steps:

1. Include the JavaScript file that defines the DisplayColors component in your
   HTML file:

```html
<script src="DisplayColors.js"></script>
```

1. Add the <display-colors> element to your HTML markup:

```html
<display-colors src="path/to/colors.css"></display-colors>
```

Make sure to replace `"path/to/colors.css"` with the actual path to your CSS
file.

The component will automatically fetch the CSS file, extract the colors, and
display them in a table format.

## Example

For example, consider a file `colors.css` that contains the following variables:

```CSS
:root {
  --accent-color: hsl(15.7, 75.9%, 27.6%);
  --papyrus-background: hsl(39.7, 28%, 95.6%);
  --pale-green: hsl(91, 54%, 71%);
  --pale-red: hsl(0, 86.3%, 68.4%);
  --pale-blue: hsl(184, 39%, 66%);
}
```

```html
<display-colors src=colors.css></display-colors>
```

By referencing such a file in the `src` attribute of `<display-colors>`, a table
of colors with variable names, color values, and (crucially) a swatch of each
color is generated, as follows:

```{=html}
<display-colors src=colors.css></display-colors>
```

## Attributes

### `src`

The url to the `CSS` file.

</main>

<script type="module">
import {DisplayColors} from './DisplayColors.js'

window.displayColors = document.querySelector('display-colors')
</script>

## Browser Support

The `DisplayColors` web component works in modern browsers that support Custom
Elements and Fetch API.

- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+
- Opera 41+
- Other modern browsers with Custom Elements and Fetch API support

Please note that for older browsers or those without support for Custom
Elements, you may need to use a polyfill or transpile the code to ensure
compatibility.
