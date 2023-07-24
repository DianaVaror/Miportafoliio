//Se definen constantes (const) para los elementos del DOM con los que vamos a interactuar. 
//taskInput y timeInput corresponden a los campos de entrada de texto y hora respectivamente,
// mientras que taskList y completedTasksList son las listas ordenada y desordenada donde se mostrarán las tareas pendientes y realizadas.

const taskInput = document.getElementById('taskInput');
const timeInput = document.getElementById('timeInput');
const taskList = document.getElementById('taskList');
const completedTasksList = document.getElementById('completedTasks');

//Se declara una variable (let) llamada editingTask que se utilizará para almacenar temporalmente 
//el elemento de tarea que se está editando. Inicialmente se establece como null, lo que significa que no hay ninguna tarea en edición

let editingTask = null;

//Se define la función addTask(), que se ejecuta cuando se hace clic en el botón "Agregar Tarea" o se presiona Enter en el campo de entrada de texto. 
//Primero, se obtiene el texto ingresado en el campo de entrada (taskText) y la hora seleccionada (taskTime). 
//Luego, se verifica si el texto no está vacío antes de agregar una nueva tarea.

function addTask() {
  const taskText = taskInput.value.trim();
  const taskTime = timeInput.value;

  if (taskText !== '') {
    const taskItem = document.createElement('li');    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        markAsCompleted(taskItem);
      } else {
        markAsUncompleted(taskItem);
      }
    });
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(document.createTextNode(`${taskText} (Hora: ${taskTime})`));
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => {
      editTask(taskItem, taskText, taskTime);
    });
    taskItem.appendChild(editButton);
    
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
    timeInput.value = '';
  }
}

//Se declara la función markAsCompleted(taskItem) que se utilizará para mover una tarea completada
// a la lista de tareas realizadas (completedTasksList). 

function markAsCompleted(taskItem) {
  taskList.removeChild(taskItem);
  taskItem.getElementsByTagName('input')[0].removeEventListener('change', () => {
    markAsCompleted(taskItem);
  });
  completedTasksList.appendChild(taskItem);
}

//Se declara la función markAsUncompleted(taskItem) que se utilizará para devolver una tarea marcada 
//como completada a la lista de tareas pendientes (taskList).

function markAsUncompleted(taskItem) {
  completedTasksList.removeChild(taskItem);
  taskItem.getElementsByTagName('input')[0].addEventListener('change', () => {
    markAsCompleted(taskItem);
  });
  taskList.appendChild(taskItem);
}

//Se define la función editTask(taskItem, taskText, taskTime) que se ejecuta cuando se hace 
//clic en el botón "Editar" de una tarea. Esta función se encarga de cargar los valores 
//actuales de la tarea (texto y hora) en los campos de entrada de texto y hora, 
//para que el usuario pueda editarlos. Además, se elimina la tarea de la lista de
//tareas pendientes (taskList) y se almacena temporalmente en la variable editingTask 
//para su posterior edición.

function editTask(taskItem, taskText, taskTime) {
  taskInput.value = taskText;
  timeInput.value = taskTime;
  taskList.removeChild(taskItem);
  editingTask = taskItem;
}

//Se define la función saveEditedTask() que se ejecuta cuando se presiona Enter en el campo
//de entrada de texto mientras se está editando una tarea. Esta función se encarga de guardar
//los cambios realizados en la tarea editada. Primero, se obtiene el texto ingresado en el 
//campo de entrada (editedTaskText) y la hora seleccionada (editedTaskTime). Luego, 
//se verifica si el texto no está vacío antes de guardar los cambios.

function saveEditedTask() {
  const editedTaskText = taskInput.value.trim();
  const editedTaskTime = timeInput.value;
  
  if (editedTaskText !== '') {
    const taskItem = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        markAsCompleted(taskItem);
      } else {
        markAsUncompleted(taskItem);
      }
    });
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(document.createTextNode(`${editedTaskText} (Hora: ${editedTaskTime})`));
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => {
      editTask(taskItem, editedTaskText, editedTaskTime);
    });
    taskItem.appendChild(editButton);
    
    taskList.appendChild(taskItem);
    editingTask = null;
    taskInput.value = '';
    timeInput.value = '';
  }
}

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (editingTask) {
      saveEditedTask();
    } else {
      addTask();
    }
  }
});
