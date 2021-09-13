import React from 'react';

import PropTypes from 'prop-types';

import './menu-item.css';

function MenuItem(props) {
    let { children, onClick } = props;

    return (
        <div className="menu-item-wrapper">
            <button
                className="menu-item-button"
                type="button"
                onClick={onClick}
            >
            {React.Children.map(children, (child, index) => (<span key={index} className="menu-item-text">{child}</span>))}
            </button>
        </div>
    )
}

MenuItem.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
}

export default MenuItem;
