
const container = document.querySelector('.container');

// const p = document.createElement('p');
// const h3 = document.createElement('h3');
// const div = document.createElement('div');

// const h1 = document.createElement('h1');
// const p2 = document.createElement('p');

// p.style.color = 'red';
// p.textContent = 'Hey I am red!';

// h3.style.color = 'blue';
// h3.textContent = "Hey I'm blue h3";

// div.style.backgroundColor = 'pink';
// div.style.border = '1px solid black';

// h1.textContent = "I'm in a div";
// p2.textContent = 'ME TOO!';

// container.appendChild(p);
// container.appendChild(h3);

// div.appendChild(h1);
// div.appendChild(p2);

// container.append(div);

function createElement(type, options = {}) {

    const domElement = document.createElement(type);

    if (options.text) {
        domElement.textContent = options.text;
    }

    if (options.style) {
        Object.assign(domElement.style, options.style);
    }

    return domElement;

}


const p = createElement('p', {
    text: 'Hey, I am red!',
    style: {
        color: 'red'
    }
});

const h3 = createElement('h3', {
    text: "I'm a blue h3",
    style: {
        color: 'blue'
    }
});

const div = createElement('div', {
    style: {
        backgroundColor: 'pink',
        border: '1px solid black'
    }
});

const h1 = createElement('h1', {
    text: 'I am in a div',
});

const p2 = createElement('p', {
    text: 'ME TOO!',
});

div.append(h1, p2);

container.append(p, h3, div);