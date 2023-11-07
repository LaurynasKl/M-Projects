const span = document.querySelector('span');
const btn = document.querySelector('.btn');
const body = document.querySelector('body');

const generateHexColor = () => {
    const randColor = Math.random().toString(16).slice(2,8);

    span.innerHTML = '#' + randColor;
    body.style.backgroundColor = '#' + randColor;

    console.log(randColor);
}

btn.addEventListener("click", generateHexColor);

// body.addEventListener('mousewheel', generateHexColor)