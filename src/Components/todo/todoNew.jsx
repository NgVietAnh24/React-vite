import { useState } from 'react';
import '../todo/todo.css'

const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState("anh");

    // console.log(">>>>> Check props todoNew: ", props);
    const { addNewData } = props;
    // addNewData("Viet Anh")
    const handleClick = () => {
        // alert(">>>>> Click me 🔥🔥🔥");
        addNewData(valueInput);
        setValueInput("");
    }
    const handleOnChange = (name) => {
        // console.log(">>>>> handleOnChange 🔥🔥🔥", name);
        setValueInput(name);
    }
    return (
        <div className='todo-new'>
            <input className='input-task' onChange={(event) => handleOnChange(event.target.value)} type="text" placeholder='Enter your task' value={valueInput} />
            <button className='btn-add' style={{ cursor: "pointer" }} onClick={() => handleClick()}>Add</button>
            <div>My text input is = {valueInput} </div>
        </div>
    );
}
export default TodoNew;