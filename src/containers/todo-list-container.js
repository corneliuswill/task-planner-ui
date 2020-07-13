import { connect } from 'react-redux'
import { getTodosAction, toggleTodoAction } from '../actions/todos'
import { TodoList } from '../components'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      default:
        return todos
    }
}

function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTodos: (id) => dispatch(getTodosAction(id)),
        onTodoClick: (id) => dispatch(toggleTodoAction(id))
    }
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer