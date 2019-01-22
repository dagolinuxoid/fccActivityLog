'use strict';

function createCalendar(cal, year, month) {
    let table = document.createElement('table');
    cal.append(table);
    let week = ['MO','TU','WE','TH','FR','SA','SU'];
    let firstRow = document.createElement('tr');
    table.append(firstRow);

    while (week.length) {
        let ceil = document.createElement('td');
        ceil.textContent = week.shift();
        firstRow.append(ceil);
    }

    let date = new Date(year, month);
    let dayAtFirstDate = date.getDay() ? date.getDay() : 7;
    let lastDate = new Date(year, month + 1, 0).getDate();
    let counter = 0;

    { 
    let row = document.createElement('tr');
        table.append(row);
        [...Array(7)].forEach((_,i) => {
            let td = document.createElement('td');
            row.append(td);
            if (i+1 != dayAtFirstDate) {
                return;
            }
            counter += 1;
            dayAtFirstDate += 1;
            td.textContent = counter;
        });
    }

    while (counter <= lastDate) {
        let row = document.createElement('tr');
        table.append(row);
        [...Array(7)].forEach(() => {
            let td = document.createElement('td');
            counter += 1;
            if (counter > lastDate) return;
            row.append(td); // order matters! a bug has been fixed :)
            td.textContent = counter;
        });
    }
}

createCalendar(container, 2019, 8);
