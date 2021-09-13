import lists from '../data/lists';
import tasks from '../data/tasks';
import user from '../data/user';

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
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

export function getUser() {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => res({...user}), 1000)
    } catch(error) {
      rej(`Error getting user: ${error}`)
    }
  })
}

export function getTasks () {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => res([...tasks]), 1000)
    } catch(error) {
      rej(`Error getting todos: ${error}`)
    }
  })
}

export function getLists () {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => res([...lists]), 1000)
    } catch(error) {
      rej(`Error getting lists: ${error}`)
    }
  })
}

export function getInitialData (id) {
  return Promise.all([
    getUser(id),
    getLists(id),
    getTasks(id),
  ]).then(([user, lists, tasks]) => ({
    user,
    lists,
    tasks
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

