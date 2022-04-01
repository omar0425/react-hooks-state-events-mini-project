import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";
import { CATEGORIES, TASKS } from "../data";



function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filter, setFilter] = useState("All");

  function onTaskFormSubmit (newTaskObject){
   
  setTasks([...tasks, newTaskObject])
  }

  function handleDelete(text) {
    const filteredTasks = tasks.filter((item) => item.text !== text);
    setTasks(filteredTasks);
  }
  function handleClick(e){
    //setFilter(e.target.innerText)
    //  e.target.className= "selected"
    console.log(e.target.value)
  }
  

  const displayTasks= tasks.filter((task) => filter === "All" || task.category === filter)

  return (
    <div className='App'>
      <h2>My tasks</h2>
      {/* {console.log(displayTasks)} */}
      <CategoryFilter   setFilter= {setFilter}filter={filter} categories= {CATEGORIES} uuid={uuidv4} handleClick={handleClick} />
      <NewTaskForm onTaskFormSubmit= {onTaskFormSubmit} categories= {CATEGORIES.filter(cat => cat !== 'All')} />
      <TaskList  tasks= {displayTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";

// function App() {
//   const [tasks, setTasks] = useState(TASKS);
//   const [category, setCategory] = useState("All");

//   function handleAddTask(newTask) {
//     setTasks([...tasks, newTask]);
//   }

//   function handleDeleteTask(deletedTaskText) {
//     setTasks(tasks.filter((task) => task.text !== deletedTaskText));
//   }



//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter
//         categories={CATEGORIES}
//         selectedCategory={category}
//         onSelectCategory={setCategory}
//       />
//       <div className="tasks">
//         <h5>Tasks</h5>
//         <NewTaskForm
//           categories={CATEGORIES.filter((cat) => cat !== "All")}
//           onTaskFormSubmit={handleAddTask}
//         />
//         <TaskList onDeleteTask={handleDeleteTask} tasks={visibleTasks} />
//       </div>
//     </div>
//   );
// }

// export default App;
