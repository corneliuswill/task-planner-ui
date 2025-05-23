import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { updateTaskList } from '../../../task/actions';
import { LIST_TYPE } from '../../../../constants';

import './sidebar.css';
import { FlatButton } from '../../../../components';


function Sidebar({activeList, menuItems, onClickCallback, onNewListCallback}) {
    const dispatch = useDispatch();

    const handleDrop = (e) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text");
        dispatch(updateTaskList(taskId, parseInt(e.target.id)));
    }

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const handleOnClick = (listId, e) => {
        onClickCallback(listId, e);
        e.preventDefault();
    }

    const renderListItem = (list, key) => {
        return (
            <button
                aria-label={`${list.name} list with ${list.total_tasks} tasks`}
                id={list.id}
                onDrop={(e) => handleDrop(e)}
                onDragOver={(e) => allowDrop(e)}
                key={key}
                type="button"
                className={`list-group-item${list.id === activeList? ' active' : ''}`}
                onClick={(e) => handleOnClick(list.id, e)}
                >
                {/* TODO: add support for menu icons */}
                {list.name}
                <span className="badge bg-red rounded-pill">{list.total_tasks}</span>
            </button>
        )
    }

    return (
        <nav role="navigation" className="tp-sidebar-container">
            {/* TODO: add support for list icons */}
            <div className='tp-sidebar-list list-group'>
                {
                    menuItems.filter(list => list.type.toUpperCase() === LIST_TYPE.SYSTEM).map((list, key) => (
                        list.isVisible && renderListItem(list, key)
                    ))
                }
                { menuItems.length > 0 ? <div className="divider"></div> : null }
                {
                    menuItems.filter(list => list.type.toUpperCase() !== LIST_TYPE.SYSTEM).map((list, key) => (
                        list.isVisible && renderListItem(list, key)
                    ))
                }
            </div>
            <div className="tp-bottom-bar">
                {/* TODO: add functionality to add new list */}
                <FlatButton className="new-list-button" label="Create New List" onClick={onNewListCallback}>
                    <span><i className="bi bi-plus-lg"></i> New List</span>
                </FlatButton>
            </div>
        </nav>
    );
}

Sidebar.propTypes = {
    activeList: PropTypes.number,
    menuItems: PropTypes.array,
    onClickCallback: PropTypes.func,
    onNewListCallback: PropTypes.func
}

export default Sidebar;