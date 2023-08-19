













































/*document.addEventListener('DOMContentLoaded', () => {
    traerTareas();
});*/

//LLAMA AL ENDPOINT PARA TRAER TODAS LAS TAREAS (GET)

/*async function traerTareas() {
    const apiUrl ='http://localhost:8080/tasks';

    //CONSUMO LA API
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error de red - Código: ${response.status}`);
        }
        //PARSEO LA RESPUESTA A JSON
        const data = await response.json();

        //RECORRO LA LISTA DE OBJETOS
        data.forEach(task =>{



            //OBTENGO EL TBODY DE LA TABLA
            let listaTareas = document.getElementById("listaTareas");

            //CREO LA FILA
            let tr = document.createElement("tr");
            tr.setAttribute("id", `${task.id}`)

            //CREO LAS COLUMNAS
            let tdTitulo = document.createElement("td");
            tdTitulo.innerHTML = `${task.title}`;
            tr.appendChild(tdTitulo);

            let tdDescripcion = document.createElement("td");
            tdDescripcion.innerHTML = `${task.description}`;
            tr.appendChild(tdDescripcion);

            let tdFechaCreacion = document.createElement("td");
            tdFechaCreacion.innerHTML = `${task.createdDate}`;
            tr.appendChild(tdFechaCreacion);

            let tdFechaFinalizacion = document.createElement("td");
            tdFechaFinalizacion.innerHTML = `${task.eta}`;
            tr.appendChild(tdFechaFinalizacion);

            let tdEstado = document.createElement("td");
            tdEstado.innerHTML = `${task.taskStatus}`;
            tr.appendChild(tdEstado);

            let tdTerminado = document.createElement("td");
            tdTerminado.innerHTML = `${task.finished}`;
            tr.appendChild(tdTerminado);



            let tdOperacion = document.createElement("td")
            let a = document.createElement("a")
            a.href = "#"
            a.setAttribute("onClick", `deleteTask('${task.id}')`)
            a.innerHTML="Eliminar"
            tdOperacion.appendChild(a);
            tr.appendChild(tdOperacion);

            listaTareas.appendChild(tr)


        });

    } catch (error) {
        console.error('Hubo un error:', error);
    }
}


//LLAMADA AL ENDPOINT PARA CREAR UNA TAREA (POST)

async function createTask() {
    const apiUrl = 'http://localhost:8080/tasks';

    //OBTENGO LOS DATOS
    let titulo = document.getElementById("tareaTitulo").value
    let descripcion = document.getElementById("tareaDescripcion").value
    let fechaFinalizacion = document.getElementById("tareaFechaFinalizacion").value

    const task = {
        "title" : titulo,
        "description" : descripcion,
        "eta" : fechaFinalizacion
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        if (!response.ok) {
            throw new Error(`Error de red - Código: ${response.status}`);
        }

        const responseTask = await response.json();
        console.log(responseTask);

    } catch (error) {
        console.error('Hubo un error:', error);
    }
}


//LLAMADA AL ENDPOINT PARA BORRAR UNA TAREA POR SU ID (DELETE)


*/



