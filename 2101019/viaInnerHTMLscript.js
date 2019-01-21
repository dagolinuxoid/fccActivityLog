function createTree(container, data) {
    let props = Object.keys(data);
    if (props.length) {
        container.innerHTML += '<ul></ul>';
        props.forEach(prop => {
            container.lastElementChild.innerHTML += `<li>${prop}</li>`;
            createTree(container.lastElementChild, data[prop]);
        });
    }
    return;
}
