import {ITodo} from "../../Interfaces/ITodo";
import reducer from "../../logic";
import {render, screen} from '@testing-library/react';

describe('Logic', ()=>{
    test ('add todo', async ()=>{
        const faceNewTodoTitle: string = 'Todo';
        const faceNewTodoId = Date.now();
        const initialState : ITodo[] = [];


        const action = {
            type: 'add',
            payload: {todoTitle: faceNewTodoTitle, id: faceNewTodoId}
        }
        const updatedState = reducer(initialState, action);
        expect(updatedState).toEqual([{id: faceNewTodoId, title: "Todo", completed: false}])
    })

    test ('remove todo', async ()=>{
        const faceNewTodoTitle: string = 'Todo';
        const faceTodoId = 1686575156870
        const initialState : ITodo[] = [
            {id: 1686575156870, title: "Todo3", completed: false},
        ];
        const action = {
            type: 'remove',
            payload: faceTodoId
        }
        const updatedState = reducer(initialState, action);
        expect(updatedState).toEqual([])
    })
    test ('clear completed todo', async ()=>{
        const faceNewTodoTitle: string = 'Todo';
        const faceTodoId = 1686575156870
        const initialState : ITodo[] = [
            {id: 1686575156868, title: "Todo1", completed: true},
            {id: 1686575156869, title: "Todo2", completed: false},
            {id: 1686575156870, title: "Todo3", completed: true},
            {id: 1686575156871, title: "Todo4", completed: true},
        ];
        const action = {
            type: 'clear-completed',
        }
        const updatedState = reducer(initialState, action);
        expect(updatedState).toEqual([{id: 1686575156869, title: "Todo2", completed: false}])
    })
})
