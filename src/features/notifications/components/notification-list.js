import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Notification from './notification';

const NotificationListWrapper = styled.div`
    display: flex;
    flex-direction: column
`

function NotificationList({ notifications }) {
    return (
        <NotificationListWrapper>
            {notifications.map((notification, index) => (
                notification.isVisible &&
                <Notification
                    key={index}
                    index={index}
                    type={notification.type.toUpperCase()}
                    message={notification.message}
                    isVisible={notification.isVisible}
                />
            ))}
        </NotificationListWrapper>
    );
}

NotificationList.propTypes = {
    notifications: PropTypes.array
}

NotificationList.defaultProps = {
    notifications: []
}

export default NotificationList;