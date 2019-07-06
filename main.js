console.log('siema');
const name = 'Radosław Kierznowski';
const age = 25;

console.log(`Nazywam się ${name} i mam ${age} lat. Widzę, że jesteś poszukiwaczem Easter Eggów. Bardzo miło mi Cię tu widzieć.`);

const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = 'Nazywam się <strong>${name}</strong> i mam ${age} lat.';

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[3]);