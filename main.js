console.log('siema');
const name = 'Radosław Kierznowski';
const age = 25;

console.log(`Nazywam się ${name} i mam ${age} lat. Widzę, że jesteś poszukiwaczem Easter Eggów. Bardzo miło mi Cię tu widzieć.`);

const main__div = document.querySelector('.main__div--js');

main__div.innerHTML='To zdanie zostało napisane przy użyciu JS 😄';

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[3]);