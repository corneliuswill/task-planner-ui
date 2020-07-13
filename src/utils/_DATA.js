let users = {
  "johndoe@dexample.com": {
        id: 'johndoe',
        name: 'John Doe',
        email: 'johndoe@dexample.com',
        avatarURL: 'images/avatars/male-02.jpeg',
        todos: ['wb3m1rcbu3t98qsb39iv', 'fgwr7ihtkgo3tw4rgigjuz', '37aujumzbtlq6e79ng0iu9'],
      },
    "janedoe": {
        id: 'janedoe',
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        avatarURL: 'images/avatars/janedoe.png',
        todos: ['wdtk9jjlr84oaks2mq90t', 'f5cfie6y7crwa6po641uso'],
      }
}

let todos = {
    "wb3m1rcbu3t98qsb39iv": {
        id: 'wb3m1rcbu3t98qsb39iv',
        user: 'johndoe',
        text: 'File taxes',
        timestamp: 1593832839363
    },
    "fgwr7ihtkgo3tw4rgigjuz": {
        id: 'fgwr7ihtkgo3tw4rgigjuz',
        user: 'johndoe',
        text: 'Walk Fluffy',
        timestamp: 1593833276161,
        completed: false
    },
    "37aujumzbtlq6e79ng0iu9": {
        id: '37aujumzbtlq6e79ng0iu9',
        user: 'johndoe',
        text: 'Cut the grass',
        timestamp: 1593833302392,
        completed: false
    },
    "wdtk9jjlr84oaks2mq90t": {
        id: 'wdtk9jjlr84oaks2mq90t',
        user: 'janedoe',
        text: 'Laundry',
        timestamp: 1593833321862,
        completed: false
    },
    "f5cfie6y7crwa6po641uso": {
        id: 'f5cfie6y7crwa6po641uso',
        user: 'janedoe',
        text: 'Go for a walk',
        timestamp: 1593833348668,
        completed: false
    }
}

export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

export function _getUser (id) {
  console.log('id', id)
    return new Promise((res, rej) => {
        setTimeout(() => res({...users[id]}), 1000)
    })
}

export function _getTodos (user) {
    let todosArray = Object.values(todos)
    return new Promise((res, rej) => {
        setTimeout(() => res([...todosArray]), 1000)
    })
}

function formatTodo ({ text, author }) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        text
    }
}

export function _saveTodo (todo) {
    return new Promise((res, rej) => {
      const authedUser = todo.author;
      const formattedTodo = formatTodo(todo);

      setTimeout(() => {
        todos = {
          ...todos,
          [formattedTodo.id]: formattedTodo
        }

        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            todos: users[authedUser].todos.concat([formattedTodo.id])
          }
        }

        res(formattedTodo)
      }, 1000)
    })
}