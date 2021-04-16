import React from 'react'
import TodoItem from './TodoItem'

function TodoList() {
    return (
        <ul className='list-group my-5'> 
            <h3 className='text-capitalize text-center'>Todo List</h3>
            <TodoItem/>
            <button type='button' className='btn btn-danger btn-block text-capitalize mt-5'>Clear</button>
        </ul>
    )
}

export default TodoList
