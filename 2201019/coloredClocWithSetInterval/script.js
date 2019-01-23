'use strict';
let container = document.querySelector('p');
let [hh, mm, ss] = ['.hh','.mm','.ss'].map(e => document.querySelector(e));

let start = document.querySelector('.btn--start');
let stop = document.querySelector('.btn--stop');

let intervalId;
start.addEventListener('click', () => intervalId = setInterval(render, 1000));
stop.addEventListener('click', () => clearInterval(intervalId));

function render() {
    let curr = new Date();
    const prePad = num => (''+num).padStart(2, '0');

    [hh, mm, ss].forEach((e,i,d)=> {
        d = curr;
        e.textContent = prePad([d.getHours(), d.getMinutes(), d.getSeconds()][i]);
    });

}