import {useState, useEffect, useReducer} from 'react';
import {TodoList} from "./Components/TodoList/TodoList";
import './App.css';
import {Context} from "./context";
import reducer from "./logic";
import {ITodo} from "./Interfaces/ITodo";
import {TodoFilter} from "./Components/TodoList/TodoFilter";


function App() {
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos') || '[]'));
    const [todoTitle, setTodoTitle] = useState('');
    const [filter, setFilter] = useState('All');
    const [todosFilter, setTodoFilter] = useState<ITodo[]>([])


    const addTodo = (event: any) => {
        if (event.key === 'Enter') {
            dispatch({
                  type: 'add',
                  payload: {todoTitle: todoTitle, id: Date.now()}
            })
            setTodoTitle('')
        }
    }
    const filtered = (key: string, todos: ITodo[]) => {
        return todos.filter((todo:ITodo) => {
            if (key === 'All') return true
            if (key === 'Completed' && todo.completed) return true
            if (key === 'Active' && !todo.completed) return true
        })
    }
    const selectFilter = (value: string) => {
        setFilter(value)
    }

    useEffect(() => {
        setTodoFilter(filtered(filter, state))
    }, [filter])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
        setTodoFilter(filtered(filter, state))
    }, [state]);

    return (
          <Context.Provider value={{dispatch, selectFilter}}>
              <div className="container">
                  <header className="input-container">
                      <h1>Todos</h1>
                      <input type="text"
                             id="input"
                             placeholder="What needs to be done?"
                             value={todoTitle}
                             onChange={event => setTodoTitle(event.target.value)}
                             onKeyPress={addTodo}
                      />
                  </header>
                  <main>
                      <TodoList todos={todosFilter} />
                  </main>
                  <footer>
                      <span>{state.filter((todo: ITodo) => !todo.completed).length} items left</span>
                      <div>
                          <TodoFilter  text="All" checked={true} />
                          <TodoFilter  text="Active" checked={false} />
                          <TodoFilter  text="Completed" checked={false} />
                      </div>
                      <button
                          onClick = {() => dispatch({
                              type: 'clear-completed',
                          })}
                      >
                          Clear completed
                      </button>
                  </footer>
              </div>
          </Context.Provider>
    );
}

export default App;

