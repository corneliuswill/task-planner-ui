import React from 'react';
import PropTypes from 'prop-types';

const SystemError = (props) => {
    const [type, message] = props;
    
    return (
        <div>
            <h2>A system error has occurred.</h2>
            <p>{type}: {message}</p>
        </div>
    )
}

SystemError.propTypes = {
    error: PropTypes.object.isRequired
}

export default SystemError;
