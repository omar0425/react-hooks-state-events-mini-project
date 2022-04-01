import React from "react";

function Task({ text, handleDelete, category }) {
  // function handleClick(e) {
  //   e.target.parentElement.remove();
  // }

  function handleClick() {
    handleDelete(text);
  }

  return (
    <div className='task'>
      <div className='label'>{category}</div>
      <div className='text'>{text}</div>
      <button onClick={handleClick} className='delete'>
        X
      </button>
    </div>
  );
}

export default Task;
