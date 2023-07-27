import TodoItems from "./TodoItems";

const TodosList = ({tasks, onComplete, onDelete, onEdit}) => {
    return <>
         
            {tasks.map(task => (
                <TodoItems key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} onEdit={onEdit} />
            ))}
    
    </>
}

export default TodosList;