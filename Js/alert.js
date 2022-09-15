"use strict";
console.log('Hello!'); //строки берем в ковычки
console.log('World');
console.log('3431');
console.log(3443);
console.log('Hello '+'world'); //конкатенация
console.info('Hello');
// alert('Hello');
// alert('Hello');

document.getElementById("out").innerHTML = 'Hello';
document.getElementById("out").innerHTML = 2022;
document.getElementById("out").innerHTML = '<b>2020</b>';
document.querySelector('.header').innerHTML = 5;
document.querySelector('#one').innerHTML = 777 // есть решетка
document.getElementById('one').innerHTML = 888 //нет решетки

let b; // var - устарело
let a = document.querySelector('#one'); // внутрь а получил параграф
let c;
c = document.querySelector('.header');
a.innerHTML = 9999;
c.innerHTML = 56565;