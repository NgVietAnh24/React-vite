import '../todo/todo.css'

const TodoNew = (props) => {
    console.log(">>>>> Check props todoNew: ", props);
    const { addNewData } = props;
    // addNewData("Viet Anh")
    const handleClick = () => {
        alert(">>>>> Click me 🔥🔥🔥");
    }
    const handleOnChange = (name) => {
        console.log(">>>>> handleOnChange 🔥🔥🔥", name);
    }
    return (
        <div className='todo-new'>
            <input className='input-task' onChange={(event) => handleOnChange(event.target.value)} type="text" placeholder='Enter your task' />
            <button className='btn-add' style={{ cursor: "pointer" }} onClick={() => handleClick()}>Add</button>
        </div>
    );
}
export default TodoNew;