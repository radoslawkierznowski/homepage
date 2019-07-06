console.log('siema');
const name = 'Radosław Kierznowski';
const age = 25;

console.log(`Nazywam się ${name} i mam ${age} lat. Widzę, że jesteś poszukiwaczem Easter Eggów. Bardzo miło mi Cię tu widzieć.`);

const main__div = document.querySelector('.main__div--js');

main__div.innerHTML = 'To zdanie zostało napisane przy użyciu JS 😄';

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[3]);

if ('javascript' != 'java') { console.log('to prawda') }

switch (age) {
    case 20:
        console.console.log('Masz 20 lat.');
        break;

    case 30:
        console.log('Masz 30 lat.');
        break;

    default:
        console.log(`Masz ${age} lat.`);

        break;
}

const amIOld = age > 70 ? 'yes' : 'no';
console.log(amIOld);

function calculate(x) {
    x = x + 3;
    console.log(`tradycyjnie: ${x}`);
    return x * 7;
}

console.log(calculate(2));


const calculateFat = (x) => {
    x = x + 3;
    console.log(`fat: ${x}`);
    return x * 7;
}

console.log(calculateFat(2));