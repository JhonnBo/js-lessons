let box = document.getElementById('ft'),
    sect = document.getElementsByTagName('section'),
    cls = document.getElementsByClassName('cod'),
    csscls = document.querySelectorAll('.cod'),
    numcls = document.querySelectorAll('section:nth-child(odd)'),
    sngsel = document.querySelector('footer');
console.log(box);
console.log(sect);
console.log(cls);
console.log(csscls);
console.log(numcls);
console.log(sngsel);

box.style.backgroundColor = 'green';
let a = document.querySelectorAll('code');
a.forEach(element => {
    element.style.cssText = " color: red; font-size: 24px;";
});

// sect.forEach(function(item) {
// item.style.cssText = "border: #666 dotted 2px;";
// });

// sect.forEach(element => {
//     element.style.cssText = "border: #666 dotted 2px;";
// });

for (let index = 0; index < sect.length; index++) {
    const element = sect[index];
    element.style.cssText = "border: #666 dotted 2px;";
}

let div=document.createElement("div"),
text = document.createTextNode("My text");

console.log(text);

div.classList.add('black');

// document.querySelectorAll('body div')[0].appendChild(div);
// document.querySelectorAll('body div')[0].insertBefore(div, sect[0]);
// document.querySelectorAll('body div')[0].removeChild(sect[0]);
document.querySelectorAll('body div')[0].replaceChild(div, sect[1]);

div.appendChild(text);
// document.body.appendChild(div);

console.log(div);