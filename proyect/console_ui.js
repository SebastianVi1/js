import { Task } from './task_class.js';
import { addTask, showTask } from './database.js';

let content = prompt('add content for a task');
let task = new Task(Date.now(), content, true);
addTask(task);
showTask();