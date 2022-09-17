"use strict";
let a = 9;

// >= <= == (проверка равенства) != (не равно)
// if (a != 9) {
//     // выполнится если выражение в скобках true
//     console.log('Yes');
// } else {
//     console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => { // стрелочная ф-ция (аналогично function ())
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('Welcome!');
    } else if (num > 60) {
        console.log('Ты точно сюда??');
    } else {
        console.log('Вход воспрещен!');
    }


    switch (num) {
        case 15:
            console.log('Потерпи еще год');
            break;
        case 16:
            console.log('Yeahh!!');
            break;
        default:
            console.log('gogoggo');
    }
}

let b = 4;

console.log (b == 3 || b == 7); //&& - и  || - или