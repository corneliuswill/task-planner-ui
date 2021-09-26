import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button({children, ...rest}) {
    return (
        <button type="button" className="button" {...rest}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string
}

export default Button;
