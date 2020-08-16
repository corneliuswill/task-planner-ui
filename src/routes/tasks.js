import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import { TodoListContainer } from '../containers'
import { FloatingButton } from '../components'

const Tasks = (props) => {
    const { displayLargeTitle } = props
    const location = useLocation()
    const history = useHistory()

    // TODO: Get tasks from state and filter

    useEffect(() => {
        console.log('fromDashboard', location.state.fromDashboard)
        if (!location.state.fromDashboard) {
            history.push('/dashboard')
        }

        displayLargeTitle(true)
    })

    return (
        <div className="container home">
            <TodoListContainer/>
            <FloatingButton
                width='60px'
                height='60px'
                backgroundColor='#3C038C'
                color='#FFF'
            >
                <FontAwesomeIcon icon={faPlus} color='#FFF' />
            </FloatingButton>
        </div>
    )
}

export default Tasks;