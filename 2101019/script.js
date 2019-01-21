'use strict';
let data = {
    "Fish": {
        "trout": {},
        "salamon": {}
    },

    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "redbud": {},
            "magnolia": {}
        }
    }
};

let container = document.getElementById('container');

createTree(container, data);

function createTree(container, data) {
    let props = Object.keys(data);
    if (props.length) {
        const ul = document.createElement('ul');
        container.append(ul);
        props.forEach(prop => {
            const li = document.createElement('li');
            li.textContent = prop;
            ul.append(li);
            createTree(ul, data[prop]);
        });
    }
    return;
}