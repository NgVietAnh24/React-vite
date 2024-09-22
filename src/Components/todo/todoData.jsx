import '../todo/todo.css'

const TodoData = (props) => {
    console.log(">>>> Check props: ", props)
    const { name, age, data } = props;
    return (
        <div className='todo-data'>
            <div>My name: {name}</div>
            <div>
                Learning React
            </div>
            <div>
                Watch ucademy
            </div>
        </div>
    );
}
export default TodoData;