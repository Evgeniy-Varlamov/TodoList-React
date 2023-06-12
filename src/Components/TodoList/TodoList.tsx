
import {TodoItem} from "./TodoItem"
import {ITodo} from "../../Interfaces/ITodo";
import "./TodoList.css";

export function TodoList(todos: any) {
    return (
        <ul className="todo-list">
            {todos.todos.map((item: ITodo) => <TodoItem key={item.id} {...item} />)}
        </ul>
    )
}