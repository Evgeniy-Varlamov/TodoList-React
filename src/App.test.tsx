import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {ITodo} from "./Interfaces/ITodo";

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

const faceTodos: ITodo[] = [
    {id: 1686575156868, title: "Todo1", completed: false},
    {id: 1686575156869, title: "Todo2", completed: true},
    {id: 1686575156870, title: "Todo3", completed: false},
    {id: 1686575156871, title: "Todo4", completed: false},
]

describe('App component', ()=>{
    test ('it renders', ()=>{
        render(<App />);
        const linkElement = screen.getByText('Todos');
        expect(linkElement).toBeInTheDocument();
    })

    test ('show todos', async ()=>{
        localStorage.setItem('todos', JSON.stringify(faceTodos));
        render(<App />);
        const todoList = await screen.findAllByTestId('todo-item');
        expect(todoList).toHaveLength(4);
    })
})


