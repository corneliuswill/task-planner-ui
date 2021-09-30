import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { NotificationList } from '../../../features/notifications';

import './header.css';

function Header({ title, notifications, avatar }) {
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
        document.getElementById('nav-button').addEventListener('click', toggleSidebar);

        return function cleanUpListener() {
            document.getElementById('nav-button').removeEventListener('click', toggleSidebar);
        }
    })

    return (
        <header role="banner" className="container-fluid no-gutter app-header-container">
            <div className="app-header">
                <div id="nav-button" className="menu-button">
                    <i className="bi bi-list" style={{ fontSize: '2rem' }}></i>
                </div>
                <div id="logo"><h1>{title}</h1></div>
                <div id="avatar">{avatar}</div>
            </div>
            <div className="supplemental">
                <NotificationList notifications={notifications}/>
            </div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    notifications: PropTypes.array,
    avatar: PropTypes.object
}

export default Header;
