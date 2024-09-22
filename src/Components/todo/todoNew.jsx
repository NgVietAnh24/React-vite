import '../todo/todo.css'

const TodoNew = (props) => {
    console.log(">>>>> Check props todoNew: ", props);
    const { addNewData } = props;
    addNewData("Viet Anh")
    return (
        <div className='todo-new'>
            <input className='input-task' type="text" placeholder='Enter your task' />
            <button className='btn-add'>Add</button>
        </div>
    );
}
export default TodoNew;