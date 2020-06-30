let menu = document.querySelector('.menu');
let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

console.log('menu');

let lis = document.querySelectorAll('.menu-item');
console.log('lis');

console.log(lis[0].textContent);

let temp;
temp = lis[1].textContent;
lis[1].textContent = lis[2].textContent;
lis[2].textContent = temp;

let body = document.querySelector("body");
body.style.cssText = '    background: url(../img/apple_true.jpg) center no-repeat;  -webkit-background-size: cover; background-size: cover;';

let title = document.querySelector('.title');
title.textContent='Мы продаем только подлинную технику Apple';
console.log(title);

document.querySelector('.adv').style.display = 'none';

let prm = document.getElementById('prompt');
prm.style.cssText = 'margin-top: 150px;';
let ans = prompt('Ваше отношение к технике Яблочка?');
prm.textContent =ans;