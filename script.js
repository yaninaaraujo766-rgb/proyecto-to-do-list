const inputPrincipal = document.querySelector('.input');
const botonAgregar = document.querySelector('.boton-agregar');
const container = document.querySelector('.container');

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }

    crearDiv(nuevaTarea) {
        const inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.disabled = true;
        inputItem.classList.add('item-input');
        inputItem.value = nuevaTarea;

        const botonEditar = document.createElement('button');
        botonEditar.classList.add('boton-editar');
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>';

        const botonRemover = document.createElement('button');
        botonRemover.classList.add('boton-remover');
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>';

        const divItem = document.createElement('div');
        divItem.classList.add('item');

        divItem.appendChild(inputItem);
        divItem.appendChild(botonEditar);
        divItem.appendChild(botonRemover);

        container.appendChild(divItem);

        botonEditar.addEventListener('click', function() {
            if (inputItem.disabled === true) {
                inputItem.disabled = false;
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
            } else {
                inputItem.disabled = true;
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
            }
        });

        botonRemover.addEventListener('click', function() {
            divItem.remove();
        });
    }
}

function chequearInput() {
    if (inputPrincipal.value !== "") {
        new Item(inputPrincipal.value);
        inputPrincipal.value = "";
    }
}

botonAgregar.addEventListener('click', chequearInput);