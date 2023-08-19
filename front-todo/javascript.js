
let baseUrl = "http://localhost:8080";

let tasks = [];


//METODO GET

function getTasks(){
    fetch(baseUrl+"/tasks").then(res =>{
        res.json().then(json =>{
            tasks = json;
            printTasks();
        });
    });
}


function printTasks(){
    let container = document.getElementById("listaTareas")
    container.innerHTML = "";

    tasks.forEach(task =>{
        container.innerHTML += mapTask(task);
    });
}


function mapTask(task){
    return `<tr>
    <td>${task.id}</td>
    <td>${task.title}</td>
    <td>${task.description}</td>
    <td>${task.createdDate}</td>
    <td>${task.eta}</td>
    <td>${task.finished}</td>
    <td>${task.taskStatus}</td>
    <td>
        <button class = 'btn btn-danger btn-sm' onClick="deleteTask(${task.id})">Eliminar</button>
    </td>
    </tr>`;
}



//METODO DELETE

function deleteTask(tid){
    fetch(baseUrl + '/tasks/' + tid, {
        method: "DELETE"
        }).then(res =>{
        console.log(res);
        getTasks();
    });
}








//METODO POST

function createTask(){
    let data = {
        title: document.getElementById("tareaTitulo").value,
        description: document.getElementById("tareaDescripcion").value,
        eta: document.getElementById("tareaFechaFinalizacion").value
    };

    fetch(baseUrl + "/tasks",{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type": 'application/json; charset=UTF-8'
        }
    }).then(res=>{
        getTasks();
    });
}









