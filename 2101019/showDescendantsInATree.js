'use strict';

function numerate(list) {
    const arr = [...list.children];    
    arr.forEach(e=> {
        const descendants = e.querySelectorAll('li').length;
        if (descendants) {
            if (e.tagName == 'LI') { 
                e.firstChild.data += ` [${descendants}]`; 
            }
            numerate(e);
        }
    });
}

let ul = document.querySelector('ul');
numerate(ul);