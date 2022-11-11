import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Login, NotFound } from '../routes';
import { Header, Main } from './index';
import { Sidebar } from '../features/sidebar';
import { TasksPanel } from '../features/task';
import { Avatar } from '../features/avatar';
import { SYSTEM_LISTS, UNITITLED_LIST } from '../constants'
import { createListAction } from '../features/lists/actions';
import { addToLocalStorageObjectArray } from '../utils/app-utils';
import useToken from '../hooks/use-token';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './app.css';

function App(props) {
  const lists = useSelector(state => state.lists);
  const tasks = useSelector(state => state.tasks);
  const notifications = useSelector(state => state.notifications);
  // TODO: replace local state counter with counter from global state
  //const counter = useSelector(state => state.ui.sidebar.counter);
  const [count, setCount] = useState(0);
  const [activeListId, setActiveListId] =  useState(1);
  const dispatch = useDispatch();

  const handleOnClick = (id, e) => {
    setActiveListId(id);
    e.preventDefault();
  }

  const getTasks = () => {
    return Object.values(tasks.byId);
  }

  const getCompletedTasksCount = () => {
    return getTasks().filter(task => task.isComplete).length;
  }

  const getImportantTasksCount = () => {
    return getTasks().filter(task => task.isImportant).length;
  }

  const getAllTasksCount = () => {
    return getTasks().length;
  }

  const getLists = () => {
    let listItems = [];
    let tasksArr = getTasks();

    lists.allIds.forEach(id => {
      let count = 0;

      switch(id) {
        case SYSTEM_LISTS.COMPLETED.id:
          count = getCompletedTasksCount();
          break;
        case SYSTEM_LISTS.IMPORTANT.id:
          count = getImportantTasksCount();
          break;
        case SYSTEM_LISTS.ALL_TASKS.id:
          count = getAllTasksCount();
          break;
        default:
          tasksArr.forEach(t => {
            if (t.lists.includes(id)) {
              count += 1;
            }
          });
      }

      let listWithCount = { ...lists.byId[id], total_tasks: count}

      listItems.push(listWithCount);
    })

    return listItems;
  }

  const getActiveList = () => {
    let activeList = Object.values(lists.byId).find(list => list.id === activeListId);

    if (activeList) {
      return activeList;
    }

    return {};
  }

  const onNewListClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
    let listName = count > 0 ? `${UNITITLED_LIST} ${count}` : UNITITLED_LIST;
    dispatch(createListAction(listName)).then((response) => {
      // TODO: update list object
      setActiveListId(response.payload.id);
      console.log('onNewListClick:list', response.payload);
      try {
        addToLocalStorageObjectArray('lists', response.payload);
      } catch (error) {
        console.log(`Error updating localStorage: ${error}`);
      }
    }).catch((error) => {
      // TODO: dispatch notification error
      console.log(`Error creating list: ${error}`);
    });
  }

  useEffect(() => {

  })

  // TODO: if error show system error page
  // if (errors.hasError) {
  //   return <SystemError error={errors.errorList[0]}></SystemError>
  // }

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <Header
          //title='Task Planner'
          title={process.env.REACT_APP_APP_NAME}
          notifications={Object.values(notifications.byId)}
          avatar={<Avatar size="medium"/>}
      />
      <Router>
          {props.loading === true ? null :
          <Switch>
            <Route path='/' exact>
              <Main
                sidebar={
                  <Sidebar
                    menuItems={getLists()}
                    activeList={activeListId}
                    onClickCallback={handleOnClick}
                    onNewListCallback={onNewListClick}
                  />
                }
                tasksPanel={
                  <TasksPanel
                    list={getActiveList()}
                    tasks={getTasks()}
                  />
                }
              />
            </Route>
            <Route path='/*' component={NotFound} />
          </Switch>
          }
      </Router>
    </>
  )
}

// TODO: update propTypes
App.propTypes = {
  authedUser: PropTypes.string,
  avatarURL: PropTypes.string,
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
  name: PropTypes.string,
  setAuthedUser: PropTypes.func,
  getInitialData: PropTypes.func,
  getTodos: PropTypes.func,
  lists: PropTypes.array,
  tasks: PropTypes.array
}

export default App;

