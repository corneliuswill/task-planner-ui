import React from 'react';
import PropTypes from 'prop-types';

import './modal.css';

function Modal({ minHeight, minWidth, onClose, title, overlay }) {

    const closeModal = () => {
        onClose();
    }

    if (overlay) {
        // handle overlay
    }

    return (
        <div className='modal' style={{ minHeight: minHeight, minWidth: minWidth }}>
            <div className='modal-title'>{title}</div>
            <div className='modal-content'>
                <p></p>
            </div>
            <div className='modal-actions'>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

Modal.defaultProps = {
    minHeight: '300px',
    minWidth: '300px',
    overlay: false,
    onClose: () => {}
}

Modal.propTypes = {
    minHeight: PropTypes.string,
    minWidth: PropTypes.string,
    onClose: PropTypes.func,
    overlay: PropTypes.bool,
    title: PropTypes.string
}

export default Modal;
