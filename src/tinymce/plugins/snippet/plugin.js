tinymce.PluginManager.add('snippet', function (editor) {
    var snippet_data = editor.getParam('snippet_list');

    if (typeof snippet_data === "undefined") {
        throw 'No snippet data provided';
    }

    editor.addButton('snippet', {
        type: 'menubutton',
        tooltip: 'Snippets',
        icon: 'template',
        menu: addItems(snippet_data)
    });

    function addItems(data) {
        var menu = [];

        for (var i = 0; i < data.length; i++) {
            if (typeof data[i].title === "undefined") {
                continue;
            }

            var menuItem;

            if (typeof data[i].items !== "undefined") {
                menuItem = {
                    text: data[i].title,
                    menu: addItems(data[i].items)
                };
            } else {
                menuItem = {
                    text: data[i].title,
                    onclick: onClickHandler(data[i])
                };
            }

            menu.push(menuItem);
        }

        return menu;
    }

    function onClickHandler(item) {
        return function () {
            if(typeof item.value !== "undefined") {
                editor.insertContent(item.value);
            }
            if (typeof item.onSelect === "function") {
                item.onSelect(item);
            }
        }
    }
});
