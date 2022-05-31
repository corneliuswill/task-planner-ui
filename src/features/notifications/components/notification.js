import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './notification.css';

// TODO: convert styled components to use external css
const NotificationWrapper = styled.div`
    color: #FFF;
    border-radius: 8px;
    padding: 13px 30px 13px 16px;
    margin: 2px 2rem;
    opacity: 0.8;
`

function Notification({ type, message }) {
    const [isVisible, setVisible] = useState(true);

    const TYPES = {
        INFO: { bgColor: '#CFE2FF', borderColor: '#D6D4FE', color: '#084298' },
        WARNING: { bgColor: '#FFF3CD', borderColor: '#FFECB5', color: '#664D03' },
        ERROR: { bgColor: '#F8D7DA', borderColor: '#F5C2C7', color: '#842029' },
    }

    const onHide = () => {
        setVisible(false);
    }

    if (isVisible) {
        return (
            <NotificationWrapper
                className="notification-container"
                onClick={onHide}
                style={{
                    backgroundColor: `${TYPES[type].bgColor}`,
                    borderColor: `${TYPES[type].borderColor}`,
                    color: `${TYPES[type].color}`
                }}
            >
                <p className='message'><span className="font-700">{`${type}:`}</span> {message}</p>
            </NotificationWrapper>
        )
    }

    return null;
}

Notification.propTypes = {
    index: PropTypes.number,
    message: PropTypes.string.isRequired,
    onCloseClick: PropTypes.func,
    type: PropTypes.string
}

Notification.defaultProps = {
    type: 'INFO'
}

export default Notification;
