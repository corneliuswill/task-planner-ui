import { connect } from 'react-redux'
import { toggleCompleteTaskAction } from '../../task/actions'
import List from './list'

const getVisibleTasks = (tasks, filter) => {
    console.log('filter', filter);
    switch (filter) {
      case 'SHOW_ALL':
        return tasks
      case 'SHOW_COMPLETED':
        return tasks.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return tasks.filter(t => !t.completed)
      default:
        return tasks
    }
}

function mapStateToProps(state) {
    return {
        tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onTaskClick: (id) => dispatch(toggleCompleteTaskAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)