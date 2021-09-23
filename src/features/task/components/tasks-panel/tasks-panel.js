import React, { useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

import { List } from '../../../lists';
import { PopupMenu } from '../../../menus'
import { addTaskAction, toggleCompleteTaskAction } from '../../actions'
import { SYSTEM_LISTS } from '../../../../common/constants';
import { updateListAction } from '../../../lists/actions';

import './tasks-panel.css';

const AddTodoInput = styled.input`
    display: block;
    box-sixing: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 4px;
    padding: .75rem 1.25rem;
    width: 100%;
`
const InputContainer = styled.div`
    display: block;
    box-sixing: border-box;
    position: absolute;
    left: 0;
    bottom: 16px;
    // padding: 0 16px;
    width: 100%;
`
const DateText = styled.p`
    color: #FFF;
    font-size: .75em;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
`

const TitleTextBox = styled.input`
    background-color: #1E1E1E;
    border: none;
    color: #FFF;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    width: 100%
`
const NoTasksText = styled.p`
    color: #333;
    font-weight: 700;
    text-align: center;
`

// const bgImage = {
//     backgroundImage: 'url("../assets/images/mv.jpg")',
//     backgroundColor: "#cccccc",
//     height: "100vh",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     position: "relative"
// }

function TasksPanel({list, tasks}) {
    const dispatch = useDispatch();
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [text, setText] = useState('');
    const [isEditable, setEditable] = useState(false);
    const today = moment().format("dddd, MMM D");
    const titleInput = useRef(null);
    const [title, setTitle] = useState(list.name);
    //const [visibility, setVisibility] = useState('ALL');

    const handleCompleteTask = (id) => {
        dispatch(toggleCompleteTaskAction(id))
    }

    const onAddTask = (e) => {
        if (e.key === 'Enter') {
            dispatch(addTaskAction(e.target.value, list.id));
            setText('');
        }
    }

    const filterTask = () => {
        let arr = [];

        if (list) {
            if (list.id === SYSTEM_LISTS.ALL_TASKS.id) {
                setFilteredTasks(tasks);
                return;
            }

            if (list.id === SYSTEM_LISTS.COMPLETED.id) {
                setFilteredTasks(tasks.filter(task => task.isComplete));
                return;
            }

            if (list.id === SYSTEM_LISTS.IMPORTANT.id) {
                setFilteredTasks(tasks.filter(task => task.isImportant));
                return;
            }

            // TODO: update to compare date and time when appropriate
            tasks.forEach(task => {
                if (task.lists && task.lists.length > 0) {
                    if (task.lists.includes(list.id)) {
                        arr.push(task);
                    }
                }
            });
        }
        setFilteredTasks(arr);
    }

    const toggleEditMode = () => {
        setEditable(!isEditable);
    }

    const updateTitle = (t) => {
        setEditable(false);
        // TODO: dispatch action to update list name
        setTitle(t);
        dispatch(updateListAction(list.id, t));
    }

    const handleUpdateList = (e) => {
        if (e.key === 'Enter') {
            setEditable(false);
            // TODO: dispatch action to update list name
            setTitle(e.target.value);
            dispatch(updateListAction(list.id, e.target.value));
        }
    }

    const onOptionsClick = (e) => {
        // TODO: show options menu
        console.log(e.target, e.clientX, e.clientY);
    }

    useEffect(() => {
        filterTask();
        if (isEditable) {
            titleInput.current.focus();
        }
        setTitle(list.name);
    },[list, tasks, isEditable])

    return (
        <div className="tasks-panel">
            <div className="task-panel-header">
                { list &&
                <>
                { isEditable ?
                    (<TitleTextBox
                        type="text"
                        ref={titleInput}
                        defaultValue={title}
                        onBlur={(e) => updateTitle(e.target.value)}
                        onKeyPress={(e) => handleUpdateList(e)}
                    />)
                :
                    (<Title className="task-list-title" onClick={toggleEditMode}>{title}</Title>)
                }
                <DateText className="date">{today}</DateText>
                </>
                }
                <button className="options-button button-unstyled" onClick={onOptionsClick}>
                    <i className="bi bi-three-dots"></i>
                </button>
                <PopupMenu/>
            </div>
            <div className="task-panel-body">
                {/* TODO: fix to show All Empty by list */}
                { tasks.length > 0 ?
                <List tasks={filteredTasks} onTaskClick={handleCompleteTask}/>
                :
                    <NoTasksText>All Empty</NoTasksText>
                }
            </div>
            <InputContainer>
                <AddTodoInput
                    value={text}
                    placeholder="&#43; Add a Task"
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={(e) => onAddTask(e)}
                />
            </InputContainer>
        </div>
    )
}

TasksPanel.propTypes = {
    list: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired
}

TasksPanel.defaultProps = {
    tasks: []
}

export default TasksPanel;