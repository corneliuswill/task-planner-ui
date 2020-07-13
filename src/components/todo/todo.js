import React from 'react'
import PropTypes from 'prop-types'

function Todo({ id, text, completed, onClick }) {
    return (
        <li 
            id={id}
            className='list-group-item'
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                marginBottom: '2px'
            }}
        >
            {text}
        </li>
    )
}

Todo.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Todo
