import React from 'react'
import PropTypes from 'prop-types'

import { Task } from '../../task'

function List({ tasks, onTaskClick }) {
    return (
        <ul className='list-group'>
            {tasks.map((task, index) => (
                <Task key={index} {...task} onClick={() => onTaskClick(task.id)} />
            ))}
        </ul>
    )
}

List.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired,
        isImportant: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    onTaskClick: PropTypes.func.isRequired,
}

export default List
