"use strict";
let a = 6;
let b = 'Hello';
let div = document.querySelector('.out')

console.log(a);
let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');

button.onclick = function (){
    //кнопка будет нажата
    console.log('Работает!');
    // console.log(inputIn.value); // value - то что введено в инпут
    let b = +inputIn.value; // + переводит из строки в число
    console.log(b + 10);
    div.innerHTML = b;
    inputIn.value = '';
}