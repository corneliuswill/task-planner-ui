import { connect } from 'react-redux'
import { setAuthedUserAction } from '../actions/authed-user'
import { addTodoAction } from '../actions/todos'
import { App } from '../components'
//import { handleInitialData, getTodos } from '../actions/shared'

function mapStateToProps({ user, authedUser }) {
    //const userId = authedUser

    return {
      //loading: user === null,
      //authedUser: userId,
      //name: userId !== null ? user[userId].name : null,
      //avatarURL: userId !== null ? user[userId].avatarURL : null
    }
  }

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (userId) => dispatch(setAuthedUserAction(userId)),
        addTodo: (text) => dispatch(addTodoAction(text))
        //getInitialData: (userId) => dispatch(handleInitialData(userId)),
        //getTodos: (userId) => dispatch(getTodos(userId))
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer