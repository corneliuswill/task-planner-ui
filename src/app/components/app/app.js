/* eslint-disable */
import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import { Login, SignUp, ResetPassword, Settings, NotFound } from '../../../routes';
import { fakeAuth } from '../../../common/utils/auth-utils'
import Main from '../main/main'
import { Sidebar } from '../../../features/sidebar';
import { TasksPanel } from '../../../features/task';
import { Avatar } from '../../../features/avatar';
// import { setAuthedUserAction } from './actions/authed-user'
// import { addTodoAction } from './actions/todos'
// import { handleInitialData, getTodos } from '../actions/shared'
import { SYSTEM_LISTS, UNITITLED_LIST } from '../../../common/constants'
import Health from '../../../routes/health';
import Dashboard from '../../../routes/dashboard';
import Header from '../header/header';
import { createListAction } from '../../../features/lists/actions';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './app.css';
import { addToLocalStorageObjectArray } from '../../../common/utils/app-utils';

function App(props) {
  const lists = useSelector(state => state.lists);
  const tasks = useSelector(state => state.tasks);
  const notifications = useSelector(state => state.notifications);
  const counter = useSelector(state => state.ui.sidebar.counter);

  const [isLoggedIn, setIsLoggedIn] =  useState(false);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  let [user, setUser] = useState();
  let [activeListId, setActiveListId] =  useState(1);

  const handleLogIn = (userId) => {
    fakeAuth.authenticate()
    setIsLoggedIn(true)
    props.setAuthedUser(userId)
  }

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

  // if (errors.hasError) {
  //   return <SystemError error={errors.errorList[0]}></SystemError>
  // }

  return (
    <>
      <Header
          title='Task Planner'
          notifications={Object.values(notifications.byId)}
          avatar={<Avatar size="medium"/>}
      />
      <Router>
          {props.loading === true ? null :
          <Switch>
            <PrivateRoute path='/' exact>
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
            </PrivateRoute>
            <Route path='/health' exact>
                <Health/>
            </Route>
            <Route path='/dashboard' exact>
                <Dashboard/>
            </Route>
            <Route path='/login' exact>
              <Login handleLogIn={handleLogIn}/>
            </Route>
            <Route path='/reset' component={ResetPassword}/>
            <Route path='/signup' component={SignUp}/>
            <PrivateRoute path='/settings' exact>
              <Settings/>
            </PrivateRoute>
            <Route path='/*' component={NotFound} />
          </Switch>
          }
      </Router>
    </>
  )
}

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

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.object
}

// function mapStateToProps({ user, authedUser }) {
//   const userId = authedUser

//   return {
//     loading: user === null,
//     authedUser: userId,
//     name: userId !== null ? user[userId].name : null,
//     avatarURL: userId !== null ? user[userId].avatarURL : null
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//       setAuthedUser: (userId) => dispatch(setAuthedUserAction(userId)),
//       addTodo: (text) => dispatch(addTodoAction(text))
//       getInitialData: (userId) => dispatch(handleInitialData(userId)),
//       getTodos: (userId) => dispatch(getTodos(userId))
//   }
// }

export default App
/* eslint-enable */
