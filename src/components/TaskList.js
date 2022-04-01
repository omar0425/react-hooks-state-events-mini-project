import React from "react";
import Task from "./Task";


function TaskList({ tasks, handleDelete }) {
const taskDisplay = tasks.map(
  (task, index) =>(
  <Task 
  handleDelete={handleDelete} 
  key= {index} 
  text={task.text} 
  category={task.category} 
  />
  ));


  return <div className='tasks'>{taskDisplay}</div>
  }
export default TaskList;


