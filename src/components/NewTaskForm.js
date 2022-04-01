import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {
  const [textInput, setTextInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("Code");
  
  function renderOptions() {
    return categories.map((cat) => {
      return <option key={cat}>{cat}</option>;
    });
  }

  const handleChange = (e) => {
    if (e.target.name === "text") {
      setTextInput(e.target.value);
    } else {
      setCategoryInput(e.target.value);
    }
  }
  function onTask(e){
    e.preventDefault()
    let newTaskObject = {category: categoryInput, text: textInput}
    return onTaskFormSubmit(newTaskObject)
  }


    return (
      
      <form  onSubmit={onTask} className='new-task-form'>
        <label>
          Details
          <input
            type='text'
            name='text'
            onChange= {handleChange}
            value={textInput}
          />
        </label>
        <label>
          Category
          <select name='category' onChange= {handleChange} value={categoryInput}>
            {renderOptions()}
          </select>
        </label>
        <input type='submit' value='Add task' />
      </form>
    )
  }

export default NewTaskForm;
