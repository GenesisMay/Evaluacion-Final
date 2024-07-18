document.addEventListener('DOMContentLoaded', () => {
    const textoTarea = document.getElementById('texto-tarea');
    const añadirBtn = document.getElementById('añadir');
    const listaTarea = document.getElementById('lista-tarea');

    añadirBtn.addEventListener('click', añadirTarea);

    function añadirTarea() {
        const tareaTexto = textoTarea.value.trim();
        if (tareaTexto === '') {
            alert('Esta vacio ingrese una tarea');
            return;
        }

        const li = document.createElement('li');
        li.textContent = tareaTexto;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.addEventListener('click', () => {
            listaTarea.removeChild(li);
        });
        
        li.appendChild(deleteBtn);
        listaTarea.appendChild(li);
        textoTarea.value = '';
    }
});
