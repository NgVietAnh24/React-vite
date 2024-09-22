import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import logo from './assets/react.svg'

const App = () => {
  const name = "Nguyen Viet Anh";
  const age = 20;
  const data = {
    address: "Ho Chi Minh",
    country: "Viet Nam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew />
      <TodoData name={name}
        age={age}
        data={data} />
      <div className='todo-image'>
        <img className='logo' src={logo} />
      </div>
    </div>
  )
}

export default App
