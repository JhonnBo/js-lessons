let liMenu = document.querySelectorAll('.topmenu > li');
// console.log(liMenu);

// liMenu[0].onclick = function() {
//     alert('Вы нажали 1 пункт меню');
// };

// liMenu[0].onclick = function() {
//     alert('Вы опять нажали 1 пункт меню');
// };

// liMenu[0].addEventListener('click', function() {
//     alert('Вы нажали 1 пункт меню');
//     // alert('Вы опять нажали 1 пункт меню');
// });

liMenu[0].addEventListener('click', function (event) {
    // alert('Вы нажали 1 пункт меню');
    let target = event.target;
    target.style.display = 'none';

    // console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

// liMenu[0].addEventListener('mouseenter', function(){
//     alert('Ві навеле на 1 кнопку');
// });