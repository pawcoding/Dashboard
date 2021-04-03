# Dashboard | Your Personal Startpage
## General
This Dashboard is a personal start page for your browser.
It's divided into different modules. Here even beginners can easily get started with web programming. Just download the code and open the file `index.html` with your browser.

> ![Screenshot](screenshot.png)
> Screenshot

There's also a german tutorial on my website [pawcode.de](https://pawcode.de/projekte/Projekt.php?id=dashboard)


## Modules
* Clock
  * Time
  * Date
* Google Search
* Bookmarks
* Calendar

Feel free to create your own modules and adding them to your personal dashboard.


## How to personalize
### Changing the order
Every module has it's own `<article>`-tag. You can easily swap the order of the modules by changing the order in the source code of the file `index.html`.

### Adding own bookmarks
In the module **Bookmarks** you can find the tag `<div class=links>`. This block contains all of your bookmarks. Every bookmark has the following structure:
```html
<a href="https://pawcode.de" target="_blank" title="pawcode.de">
 <img src="icons/pawcode.png" alt="Pawcode">
</a>
```
Element | Function
------- | --------
`<a>` | **Anchor tag** (Link)
`href="..."` | Links to the website
`target="_blank"` | Ensures that the page opens in a new browser tab
`title="..."` | Displays a text when the mouse hovers over the icon
`<img>` | **Image tag** (Icon)
`src="..."` | Path to the icon _(can be local in folder_ `icons` _or weblink)_
`alt="..."` | Displays a text when the icon file was not found

### Changing the theme
The style of the dashboard is divided into two different files in the folder `css`:
* `Layout.css`
* `Design.css`

You only have to worry about the design as the layout generally stays the same.
The first element of the design file is called `:root`. Here are all the colors and other useful values.
```css
:root {
  --color-background: #222;
  --color-text: #eee;
  --color-shadow: #111;

  ...
}
```
#### Example
You want to change the color of the background to light grey.
Just set the value of `--color-background` to `#bbb` and you are good to go.
