import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import logo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watch ucademy" }
  ]);

  const name = "Nguyen Viet Anh";
  const age = 20;
  const data = {
    address: "Ho Chi Minh",
    country: "Viet Nam"
  }

  const addNewData = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 1000),
      name
    }
    setTodoList([...todoList, newToDo]);
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew
        addNewData={addNewData}
      />
      <TodoData name={name}
        age={age}
        data={data}
        todoList={todoList} />
      <div className='todo-image'>
        <img className='logo' src={logo} />
      </div>
    </div>
  )
}

export default App
