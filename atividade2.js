// Faça o exercício DOS PARÁGRAFOS neste arquivo

function content(e) {
    let clicked = e.currentTarget;
    let parent = clicked.parentNode;
    parent.classList.toggle('expandido');
}

let itemsEl = document.querySelectorAll('.botao-expandir-retrair');

itemsEl.forEach(el => el.addEventListener('click', content));



