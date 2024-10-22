const TodoItem = ( { todo = { done: true, title: 'Buy milk',
    status: 'COMPLETED' } }) => {
    return (
        <li className="list-group-item flex">
            <div><input type="checkbox" className="me-2"
                        defaultChecked={todo.done}/></div>
            <div>{todo.title} ({todo.status})</div>
        </li>
    );
}
export default TodoItem;