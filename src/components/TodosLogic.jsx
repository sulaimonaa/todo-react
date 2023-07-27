import React, { useEffect, useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const LOCAL_STORAGE_KEY = "todo:savedTask";

const TodosLogic = () => {
    const [tasks, setTasks] = useState([]);

    const loadSavedTasks = () => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
            setTasks(JSON.parse(saved))
        }
    }

    useEffect(() => {
        loadSavedTasks()
    }, [])

    const setTaskAndSave = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
    }

    const addTask = (taskTitle) => {
        setTaskAndSave([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: taskTitle,
                isCompleted: false
            }
        ])
    }

    const editTaskById = (taskId) => {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                console.log('Here');
            }
        })
    }

    const toggleCompletedTaskById = (taskId) => {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
            return {
                ...task,
                isCompleted: !task.isCompleted
            }
        }
        return task
    }) 
    setTaskAndSave(newTasks)
    }

    const deleteTaskById = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTaskAndSave(newTasks)
    }

    return <>
        <div className="todoWrap">
        <InputTodo onAddTask={addTask} />
        <TodosList 
            tasks={tasks}
            onComplete={toggleCompletedTaskById}
            onDelete={deleteTaskById}
            onEdit={editTaskById}
        />
        </div>
    </>
}

export default TodosLogic;