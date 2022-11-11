import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { NotificationList } from '../features/notifications';

import './header.css';

function Header({ title, notifications, avatar, isNotificationsVisible }) {
    let [isVisible, setVisible] = useState(false);

    const toggleSidebar = () => {
        let element = document.getElementById('sidebar');
        if (isVisible) {
            element.classList.remove('show-menu');
        } else {
            element.classList.add('show-menu');
        }
        setVisible(!isVisible);
    }

    useEffect(() => {
        document.getElementById('menu-button').addEventListener('click', toggleSidebar);

        return function cleanUpListener() {
            if (document.getElementById('menu-button')) {
                document.getElementById('menu-button').removeEventListener('click', toggleSidebar);
            }
        }
    })

    return (
        <header role="banner" className="container-fluid no-gutter app-header-container">
            <div className="app-header">
                <div id="menu-button" className="menu-button">
                    <i className="bi bi-list"></i>
                </div>
                <div className="logo-container"><h1 className="app-logo">{title}</h1></div>
                <div className="avatar-container">{avatar}</div>
            </div>
            {isNotificationsVisible &&
            <div className="notifications-container">
                <NotificationList notifications={notifications}/>
            </div>
            }
        </header>
    )
}

Header.propTypes = {
    avatar: PropTypes.object,
    isNotificationsVisible: PropTypes.bool,
    notifications: PropTypes.array,
    title: PropTypes.string,
}

Header.defaultProps = {
    isNotificationsVisible: true
}

export default Header;
