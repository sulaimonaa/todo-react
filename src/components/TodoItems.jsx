import React from "react";
import writeIcon from '../assets/edit-text.png';
import deleteIcon from '../assets/trash-can.png';

const TodoItems = ({task, onComplete, onDelete}) => {
    return <>
        <div className="todoItems">
            <input type="checkbox" defaultChecked={task.isCompleted ? true : false} id={task.id} onClick={() => onComplete(task.id)}/>
            <p className={task.isCompleted ? "completeTask" : "todosItem"}>{task.title}</p>
            <img src={writeIcon} alt="write icon" className="todoItemsBtn" />
            <img src={deleteIcon} alt="write icon" className="todoItemsBtn" onClick={() => onDelete(task.id)}/>
        </div>
    </>
}

export default TodoItems;