# TinyMCE 4.x Snippet plugin
Plugin for simple multi level dropdown menu for inserting custom HTML or plain text into your editor.

This plugin supports ***TinyMCE 4.x***.

Older version of the plugin for **TinyMCE 3.x**: https://github.com/eduardstula/tinymce-simple-snippet.

## Screenshot
dropdown **multilevel menu**

![image](screenshot.png)

## Install
Install the package: `npm i @mrvito/tinymce-4-snippet-plugin`

Use:
* Require (`require('@mrvito/tinymce-4-snippet-plugin')` or `import '@mrvito/tinymce-4-snippet-plugin'`)

OR

* Include the `plugin.js` or `plugin.min.js` file into your project

## Configuration
- Add `snippet` to the *plugins* list
- Insert `snippet` button to the toolbar
- Assign snippet data to `snippet_list` parameter
```js
var snippet_data = [];

tinymce.init({
  selector: 'textarea',
  plugins: 'snippet',
  toolbar: 'snippet',
  snippet_list: snippet_data
});
```
## Data

Snippet data to be assigned to `snippet_list` parameter.
* `title` = menu item title
* `value` = HTML or plain text that will be inserted
* `items` = array of sub-menu items

```
...
snippet_list: [
  {
    title: "Czech Republic",
    value: "",
    items: [
      {
        title: "West Bohemia",
        value: "",
        items: [
          {
            title: "Mariánské Lázně",
            value: "City: Mariánské Lázně"
          },
          {
            title: "Plzeň",
            value: "City: Plzeň"
          },
          {
            title: "Karlovy Vary",
            value: "City: Karlovy Vary"
          }
        ]
      }
    ]
  }
]
...
```
## Callback

You can use a callback function:

* `onSelect` = callback function to be called when menu item is selected

```js
...
snippet_list: [
  {
    title: "Cities",
    value: "",
    items: [
      {
        title: "Pilsen",
        value: "49.746955, 13.377288",
        onSelect: function (item) {
          //menu item name => Pilsen
          console.log(item.title);
                
          //menu item value => 49.746955, 13.377288
          console.log(item.value);
        }
      }
    ]
  }
]
...
```

## Demo

See the demo.

https://www.eduardstula.cz/demo/tinymce-4-snippet-plugin/