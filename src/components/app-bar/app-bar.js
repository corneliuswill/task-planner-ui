import React from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'

import IconButton from '../icon-button/icon-button'
import './app-bar.css'

export default function AppBar({ title, largeTitle, children }) {
    let history = useHistory();

    const handleBack = (e) => {
        e.preventDefault()
        history.goBack()
    }

    return (
        <div className='app-bar-container'>
            <div className='app-bar-content'>
                <div className='app-bar-left'>
                    <IconButton onClick={handleBack}/>
                </div>
                <div className='app-bar-center'>

                </div>
                <div className='app-bar-right'>

                </div>
            </div>
            { largeTitle &&
            <div className='app-bar-large-title'>
                <h2 className='font-bold mb-6'>{title}</h2>
            </div>
            }
        </div>
    )
}

AppBar.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    largeTitle: PropTypes.bool
}

AppBar.defaultProps = {
    title: '',
    largeTitle: ''
}