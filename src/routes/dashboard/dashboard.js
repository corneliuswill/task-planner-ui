import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
    const { handleScreenChange, displayLargeTitle } = props

    useEffect(() => {
        displayLargeTitle(false)
        handleScreenChange('Dashboard', '#FAFAFA')
    })

    return (
        <div className='container dashboard'>
            <ul className='list-group'>
            <li className='list-group-item'>
                    <Link to={{
                            pathname: '/tasks',
                            state: {
                                fromDashboard: true,
                            }
                        }}

                        onClick={() => {
                            handleScreenChange('Important', '#E63946')
                            displayLargeTitle(true)  
                        }}
                    >
                        <div className='d-flex w-100 justify-content-between'>
                            Important
                            <small>2</small>
                        </div>
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link to={{
                            pathname: '/tasks',
                            state: {
                                fromDashboard: true,
                            }
                        }}
                        onClick={() => handleScreenChange('Today', '#2A9D8F')}
                    >
                        <div className='d-flex w-100 justify-content-between'>
                            Today
                            <small>2</small>
                        </div>
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link to={{
                            pathname: '/tasks',
                            state: {
                                fromDashboard: true,
                            }
                        }}
                        onClick={() => handleScreenChange('Tomorrow', '#E9C46A')}
                    >
                        <div className='d-flex w-100 justify-content-between'>
                            Tomorrow
                            <small>3</small>
                        </div>
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link to={{
                            pathname: '/tasks',
                            state: {
                                fromDashboard: true,
                            }
                        }}
                        onClick={() => handleScreenChange('This Week', '#F4A261')}
                    >
                        <div className='d-flex w-100 justify-content-between'>
                            This Week
                            <small>7</small>
                        </div>
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link to={{
                            pathname: '/tasks',
                            state: {
                                fromDashboard: true,
                            }
                        }}
                        onClick={() => handleScreenChange('All Tasks', '#22668D')}
                    >
                        <div className='d-flex w-100 justify-content-between'>
                            All Tasks
                            <small>13</small>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Dashboard
