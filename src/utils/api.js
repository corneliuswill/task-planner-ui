import {
    _getUser,
    _getTodos
  } from './_DATA.js'


export function getInitialData (id) {
  return Promise.all([
    _getUser(id),
    _getTodos(id)
  ]).then(([user, todos]) => ({
    user,
    todos
  }))
}

