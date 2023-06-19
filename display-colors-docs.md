---
lang: en
title:  \<display-colors\> docs
css: display-colors.css
---

<main>

Sometimes it’s useful to manage a list of colors in a `colors.css` file, with a set of variables that can be reused throughout a project.

This component will render a reference table of such colors directly from the `CSS` file. 

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

By referencing such a file in the `src` attribute of `<display-colors>`, a table of colors with variable names, color values, and (crucially) a swatch of each color is generated, as follows:

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

