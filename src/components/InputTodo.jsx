import React, { useState } from "react";
import addbutton from '../assets/add.png';

const InputTodo = ({onAddTask}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(title);
        setTitle('');
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add todo..." className="addInput" value={title} onChange={onChangeTitle} />
            <button className="btnAdd">
            <img src={addbutton} alt="add button" className="addBtn" />
            </button>
        </form>
    </>
}

export default InputTodo;