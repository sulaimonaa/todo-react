import React, { useState } from "react";
import writeIcon from '../assets/edit-text.png';
import deleteIcon from '../assets/trash-can.png';

const TodoItems = ({task, onComplete, onDelete, onEdit}) => {
    const [editing, setEditing] = useState(false);
    let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
    const handleEditing = () => {
        setEditing(true);
      };

      const setUpdate = (updatedTitle, id) => {
        setTaskAndSave(
          task.map((task) => {
            if (task.id === id) {
              task.title = updatedTitle;
            }
            return task;
          })
        );
      };
    
      const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          setEditing(false);
        }
      };

    return <>
        <div className="todoItems" style={viewMode}>
            <input type="checkbox" defaultChecked={task.isCompleted ? true : false} id={task.id} onClick={() => onComplete(task.id)}/>
            <p className={task.isCompleted ? "completeTask" : "todosItem"}>{task.title}</p>
            <img src={writeIcon} alt="write icon" className="todoItemsBtn" onClick={handleEditing} />
            <img src={deleteIcon} alt="write icon" className="todoItemsBtn" onClick={() => onDelete(task.id)}/>
        </div>
        <div className="todoItems">
        <input type="text" defaultValue={task.title} className="textInput" style={editMode} onChange={(e) => setUpdate(e.target.value, task.id)} onKeyDown={handleUpdatedDone}/>
        </div>
    </>
}

export default TodoItems;