// console.time();
// let h = 180;
// let w = 90;
//
//
// function getImc(height, weight) {
//     console.log(height);
//     return weight / Math.pow((height / 100), 2);
// }
//
//
// function getDirtyImc() {
//     return w / Math.pow((h / 100), 2);
// }
//
// document.querySelector('body').addEventListener('click', (event) => {
//     alert("coucou");
// })
//
//
// console.log(getDirtyImc(h, w));
//
//
// let tableau = new Array();
// let tab = ['coucou', 'hibou'];
//
// console.log(tableau);
// console.log(tab);
//
//
// const firstName = "Théau";
//
// let it = tab.keys();
//
// console.log(it.next()); // { value: 0, done: false }
// console.log(it.next()); // { value: 1, done: false }
// console.timeEnd();

// document.querySelector('#to-delete').remove();

const $main = document.querySelector('main');

let googleLink = document.createElement('a');
googleLink.href = 'https://google.fr';
googleLink.innerText = 'Google';

$main.appendChild(googleLink);


//input type number dans un formulaire. Si on depasse 3, on remet à 3 et on affiche un message
// sous l'input pour indiquer que c'est le maximum + modifier le border de l'input en rouge






