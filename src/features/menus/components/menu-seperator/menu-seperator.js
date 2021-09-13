import React from 'react';

import PropTypes from 'prop-types';

function MenuSeperator({ color }) {
    return (
        <div
            className="menu-seperator"
            style={{
                backgroundColor: color,
                height: '1px',
                margin: '4px 16px',
            }}
        ></div>
    )
}

MenuSeperator.propTypes = {
    color: PropTypes.string.isRequired
}

export default MenuSeperator;