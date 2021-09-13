import React, { useEffect, useRef } from 'react';


import PropTypes from 'prop-types';

import styles from './avatar.module.css'


function Avatar ({ size, variant }) {
    const avatar = useRef(null);

    useEffect(() => {
        // TODO: get user avatar
        //console.log('avatar', avatar.current);
    });

    return (
        <div className={`${styles[variant]} ${styles[size]}`} ref={avatar}>

        </div>
    );
}

Avatar.propTypes = {
    size: PropTypes.string,
    variant: PropTypes.string
}

Avatar.defaultProps = {
    size: 'large',
    variant: 'circle'
}

export default Avatar;

