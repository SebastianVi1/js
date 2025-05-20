let todoList = [];

function addTask(task)  {
    todoList.push(task);
}

function deleteTask(id) {
    const newList = todoList.filter((task) => task.id !== id);
    todoList = newList;
}

function showTask(){
    if (todoList.length == 0) {
        alert('no hay elementos')
        return;
    }
    todoList.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}, Completed: ${task.completed}`);
    });
}

function completeTask(id){
    for (let task of todoList) {
        if (task.id == id) {
            task.toggleCompleted();
            break;
        }
    }
}

export { addTask, showTask, deleteTask, completeTask };
