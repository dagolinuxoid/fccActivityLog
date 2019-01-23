'use strict';
function arrangeByName() {
  let fields = [...document.getElementById('table').rows].slice(1);
  fields.sort((a,b)=>a.cells[0].textContent
              .localeCompare(b.cells[0].textContent));
  fields.forEach(field => document.getElementById('table').append(field));
}

arrangeByName();
