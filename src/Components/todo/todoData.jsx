import '../todo/todo.css'

const TodoData = (props) => {
    console.log(">>>> Check props: ", props)
    const { name, age, data, todoList } = props;
    return (
        <div className='todo-data'>
            <div>My name: {name}</div>
            <div>
                {JSON.stringify(todoList)}
            </div>
            <div>
                Watch ucademy
            </div>
        </div>
    );
}
export default TodoData;