import lists from '../mocks/lists';
import tasks from '../mocks/tasks';
import user from '../mocks/user';
import notifications from '../mocks/notifications';

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const getApiMock = (mock) => {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => res({...mock}), 1000)
    } catch(error) {
      rej(`Error getting user: ${error}`)
    }
  })
}

export const getUserV2 = () => (dispatch) =>
  new Promise((res, rej) => {
    try {
      dispatch({
        type: 'GET_USER',
      })

      setTimeout(() => res({...user}), 1000)
    } catch(error) {
      rej(`Error getting user: ${error}`)
    }
  })

export function getInitialData () {
  return Promise.all([
    getApiMock(user),
    getApiMock(lists),
    getApiMock(tasks),
    getApiMock(notifications)
  ]).then(([user, lists, tasks, notifications]) => ({
    user,
    lists,
    tasks,
    notifications
  }))
}

function formatTask ({ text, author }) {
  return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      text
  }
}

export function _saveTodo (task) {
  return new Promise((res, rej) => {
    const formattedTask = formatTask(task);

    try {
      setTimeout(() => {
        // tasks = {
        //   ...tasks,
        //   [formattedTask.id]: formattedTask
        // }

        // users = {
        //   ...users,
        //   [task.author]: {
        //     ...users[task.author],
        //     tasks: users[task.author].tasks.concat([formattedTask.id])
        //   }
        // }

        res(formattedTask)
      }, 1000)
    } catch(error) {
      rej(`Error saving todo: ${error}`)
    }
  })
}

