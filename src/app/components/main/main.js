import React from 'react';
import PropTypes from 'prop-types'
import LoadingBar from 'react-redux-loading-bar';

import { ContextMenu, MenuItem, MenuSeperator } from '../../../features/menus';
import { ErrorBoundary } from '../../../features/errors';

function Main({sidebar, tasksPanel}) {
    return (
        <div className="app-container container-fluid no-gutters">
            <div className="row">
                <div id="sidebar" className="app-sidebar-container d-md-block col-md-4 col-lg-3 g-0">
                    <ErrorBoundary>
                    {sidebar}
                    </ErrorBoundary>
                </div>
                <div className="app-content-container col-md-8 col-lg-9">
                    <LoadingBar className="loading-bar"/>
                    <div className="app-main-inner">
                        <ErrorBoundary>
                        {tasksPanel}
                        </ErrorBoundary>
                        <ContextMenu
                            opacity="0.90"
                            color="#333"
                        >
                            <MenuItem>Add to Today</MenuItem>
                            <MenuItem>Mark as Important</MenuItem>
                            <MenuItem>Mark as Completed</MenuItem>
                            <MenuSeperator color="#CCC"></MenuSeperator>
                            <MenuItem>Delete Task</MenuItem>
                        </ContextMenu>
                    </div>
                </div>
            </div>
        </div>
    );
}

Main.propTypes = {
    sidebar: PropTypes.object,
    tasksPanel: PropTypes.object,
    onClickCallback: PropTypes.func
}

export default Main;
