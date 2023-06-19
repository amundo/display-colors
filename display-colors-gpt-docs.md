# DisplayColors Web Component

The `DisplayColors` web component is a custom element that displays a table of colors extracted from a CSS file specified by the `src` attribute.

## Usage

To use the `DisplayColors` component, follow these steps:

1. Include the JavaScript file that defines the DisplayColors component in your HTML file:

```html
<script src="DisplayColors.js"></script>

```

1. Add the <display-colors> element to your HTML markup:

```html
<display-colors src="path/to/colors.css"></display-colors>

```

Make sure to replace `"path/to/colors.css"` with the actual path to your CSS file.

The component will automatically fetch the CSS file, extract the colors, and display them in a table format.


## Attributes

The `DisplayColors` component supports the following attribute:

> ### - `src`
> 
> Specifies the URL of the CSS file from which to extract the colors. When the attribute value changes, the component will fetch the CSS file and update the displayed colors accordingly.


## Example

Here's an example of using the `DisplayColors` component:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Display Colors Example</title>
  <script src="DisplayColors.js"></script>
</head>
<body>
  <display-colors src="path/to/colors.css"></display-colors>
</body>
</html>

```

In the above example, replace `"path/to/colors.css"` with the actual path to your CSS file.


## Styling

The `DisplayColors` component applies the following default styles:

- The colors are displayed in a table format.
- Each color is shown in a swatch cell with its corresponding variable name and value.

To customize the styling, you can modify the CSS rules in your own stylesheet.


## Browser Support

The `DisplayColors` web component works in modern browsers that support Custom Elements and Fetch API.

- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+
- Opera 41+
- Other modern browsers with Custom Elements and Fetch API support

Please note that for older browsers or those without support for Custom Elements, you may need to use a polyfill or transpile the code to ensure compatibility.

That's it! You can now use the `DisplayColors` component to easily display the colors defined in your CSS files.

