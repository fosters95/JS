"use strict";
// document.querySelector('button').onclick = function (){
//     console.log(document.querySelector('#one').value);
//     // style
//     document.querySelector('button').style.backgroundColor =
//     document.querySelector('#one').value
// }
//
// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value
//
// }

document.querySelector('#btn-1').onclick =  () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    } else {
        console.log('Не нажат');
    }
}

document.querySelector('#btn-2').onclick =  (event) => {
    event.preventDefault(); //позволят остановить перезагрузку страницы при нажатии click
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = "one";
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.n1.value);
    console.log(form.elements.three.value);
}