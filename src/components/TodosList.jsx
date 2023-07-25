import TodoItems from "./TodoItems";

const TodosList = ({tasks, onComplete, onDelete}) => {
    return <>
         
            {tasks.map(task => (
                <TodoItems key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
            ))}
    
    </>
}

export default TodosList;