import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Todo } from '../index'

function TodoList({ todos, getTodos, onTodoClick }) {
    useEffect(() => {
        //getTodos()
    })

    return (
        <ul className='list-group'>
            {todos.map((todo, index) => (
                <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired
}

export default TodoList
