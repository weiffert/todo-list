let number = 0;
const checkboxForm = document.querySelector('div#valid form');
const inputForm = document.querySelector('form#input');
const checkedForm = document.querySelector('div#finished form');
const clearButton = checkedForm.querySelector('button');

inputForm.addEventListener('submit', handleSubmit);
clearButton.addEventListener('click', clearData);

function handleSubmit(event) {
    event.preventDefault();
    createCheckElement(event.target.todo.value);
    event.target.reset();
}

function createCheckElement(content) {
    const p = document.createElement('p');
    const check = document.createElement('input');
    const label = document.createElement('label');

    label.textContent = content;
    label.setAttribute('for', `checkbox${number}`);

    check.type = 'checkbox';
    check.name = `checkbox${number}`;
    check.id = `checkbox${number}`;
    check.addEventListener('change', handleCheck);

    p.appendChild(check);
    p.appendChild(label);

    checkboxForm.appendChild(p);

    number++;
    repositionElements();
}

function handleCheck(event) {
    const todo = event.target.parentElement;
    if (todo.children[0].checked) {
        todo.classList.add('checked');
        checkedForm.appendChild(todo);
    } else {
        todo.classList.remove('checked');
        checkboxForm.appendChild(todo);
    }

    repositionElements();
}

function clearData(event) {
    checkedForm.innerHTML = '';
    checkedForm.appendChild(clearButton);
    repositionElements();
}

function repositionElements() {
    const top = document.querySelector('div#valid');
    const bottom = document.querySelector('div#finished');

    if(window.innerHeight - top.offsetHeight - bottom.offsetHeight - 50 < 0)
        bottom.style.top = '0px';
    else
        bottom.style.top = window.innerHeight - top.offsetHeight - bottom.offsetHeight - 50 + 'px';
}

repositionElements();