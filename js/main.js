import { Todo } from '../services/todo.js'
import { TodoList } from '../services/todoList.js'

const todoList = new TodoList

const getEle = id => document.getElementById(id)

// Render task in progress
const renderTaskInProgress = () => {
   const content = todoList.filterTaskInProgress().reduce((total, value) => {
      total += `
           <li class="d-flex">
               <p>${value.taskName}</p>
               <div class="buttons">
                   <span class="far fa-trash-alt remove" onclick="removeTask('${value.taskName}')"></span>
                   <span class="fas fa-check-circle complete" complete onclick="completeTask('${value.taskName}')"></span>
               </div>
           </li>   
       `
      return total
   }, "");
   getEle("todo").innerHTML = content;
}

// Render task complete
const renderTaskComplete = () => {
   const content = todoList.filterTaskComp().reduce((total, value) => {
      total += `
           <li class="d-flex">
               <p>${value.taskName}</p>
               <div class="buttons">
                   <span class="far fa-trash-alt remove" onclick="removeTask('${value.taskName}')"></span>
                   <span class="fas fa-check-circle complete")"></span>
               </div>
           </li>   
       `
      return total
   }, "");
   getEle("completed").innerHTML = content;
}

// Add item
getEle("addItem").onclick = () => {
   const nameTask = getEle("newTask").value;
   if (nameTask == "") {
      alert("Vui lòng nhập 1 vài hoạt động");
      return;
   }
   const task = new Todo(nameTask, "inProgress");
   todoList.addTask(task);
   renderTaskInProgress();
   renderTaskComplete();
   getEle("newTask").value = "";
}

window.removeTask = (task) => {
   todoList.deleteTask(task);
   renderTaskInProgress();
   renderTaskComplete();
}

window.completeTask = (task) => {
   todoList.arr.forEach((ele) => {
      if (ele.taskName === task) {
         ele.status = "complete";
      }
   })
   renderTaskInProgress();
   renderTaskComplete();
}


getEle("two").onclick = () => {
   todoList.sortTaskAsc();
   renderTaskInProgress();
}

getEle("three").onclick = () => {
   todoList.sortTaskDec();
   renderTaskInProgress();
}