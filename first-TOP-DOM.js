
const container = document.querySelector('.container');

const p = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');

const h1 = document.createElement('h1');
const p2 = document.createElement('p');

p.style.color = 'red';
p.textContent = 'Hey I am red!';

h3.style.color = 'blue';
h3.textContent = "Hey I'm blue h3";

div.style.backgroundColor = 'pink';
div.style.border = '1px solid black';

h1.textContent = "I'm in a div";
p2.textContent = 'ME TOO!';

container.appendChild(p);
container.appendChild(h3);

div.appendChild(h1);
div.appendChild(p2);

container.append(div);

