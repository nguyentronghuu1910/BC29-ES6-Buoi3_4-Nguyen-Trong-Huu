export class TodoList {
   arr = [];

   addTask(task) {
      this.arr.push(task);
   };

   // Tìm vị trí index
   findIndex(task) {
      let index = -1;
      this.arr.forEach((ele, idx) => {
         if (ele.taskName === task) {
            index = idx;
            // console.log(ele);
         }
      });
      return index;
   };

   // Delete task 
   deleteTask(task) {
      const index = this.findIndex(task);
      if (index !== -1) {
         this.arr.splice(index, 1);
      }
   };

   // Filter task in progress
   filterTaskInProgress() {
      return this.arr.filter((task) => {
         if (task.status === "inProgress") {
            return true
         }
         return false;
      })
   }

   // Filter task complete
   filterTaskComp() {
      return this.arr.filter((task) => {
         if (task.status === "complete") {
            return true
         }
         return false;
      })
   }

   // Update Task
   updateTask(task) {
      this.arr = this.arr.map(ele => {
         return ele.taskName === task.taskName ? task : ele
      })
   };

   // Sort task asc
   sortTaskAsc() {
      this.arr.sort((task, nextTask) => {
         if (task.taskName > nextTask.taskName) {
            return 1
         }
         return -1
      });
   }

   // Sort task dec
   sortTaskDec() {
      this.arr.sort((task, nextTask) => {
         if (task.taskName < nextTask.taskName) {
            return 1
         }
         return -1
      });
   }
}