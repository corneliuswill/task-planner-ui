import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteTaskAction, toggleImportantTaskAction } from '../../actions';

import './task.css';

function Task({ id, text, isComplete, isImportant, onClick }) {
    // TODO: not needed
    //let [Important, setImportant] = useState(isImportant);
    const dispatch = useDispatch();

    const toggleImportant = () => {
        // TODO: not needed
        //setImportant(!Important);
        dispatch(toggleImportantTaskAction(id));
    }

    const deleteTask = () => {
        dispatch(deleteTaskAction(id));
    }

    const handleDrag = (e) => {
        e.dataTransfer.setData("text", e.target.id);
    }

    return (
        <li draggable="true" 
            onDragStart={(e) => handleDrag(e)}
            id={id}
            className="list-group-item"
        >
            <div className="task">
                <div className="left-content-col">
                    {isComplete ?
                    <button aria-label="Task completed" className="action-button complete-toggle-button" aria-pressed="false" onClick={onClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <title>Complete</title>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    </button>
                    :
                    <button aria-label="Complete task" className="action-button complete-toggle-button" aria-pressed="false" onClick={onClick}/>
                    }
                    <span
                        className="task-text"
                        style={{
                            textDecoration: isComplete ? 'line-through' : 'none'
                        }}
                    >{text}</span>
                </div>
            <div className="right-content-col">
                {isImportant ?
                <button aria-label="Important" type="button" className="action-button important-toggle-button" aria-pressed="true" onClick={toggleImportant}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <title>Important</title>
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </button>
                :
                <button aria-label="Mark Important" type="button" className="action-button important-toggle-button" aria-pressed="false" onClick={toggleImportant}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#DDD" className="bi bi-star" viewBox="0 0 16 16">
                        <title>Unimportant</title>
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                </button>
                }
                <button aria-label="Delete" type="button" className="action-button delete-task-button" onClick={deleteTask}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <title>Delete</title>
                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                </button>
            </div>
            </div>
        </li>
    )
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    isImportant: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Task;

