import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
    return (
        <>
            <h3 className="text-xl font-bold mb-4">Todo List</h3>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <hr className="my-4 border-t-2 border-gray-300" />
        </>
    );
};

export default TodoList;
