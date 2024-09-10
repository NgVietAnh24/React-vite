import '../todo/todo.css'

const TodoNew = () => {
    return (
        <div className='todo-new'>
            <input className='input-task' type="text" placeholder='Enter your task' />
            <button className='btn-add'>Add</button>
        </div>
    );
}
export default TodoNew;