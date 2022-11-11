import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;

    &:hover {
        background: transparent;
        box-shadow: 0px 0px 0px transparent;
        border: 0px solid transparent;
        text-shadow: 0px 0px 0px transparent;
    }

    &:active {
        outline: none;
        border: none;
    }

    &:focus {
        outline: 0;
    }
`

function FlatButton({ children, label, className, onClick }) {
    return (
        <Button aria-label={label} type="button" className={className}  onClick={onClick}>
            {children}
        </Button>
    );
}

FlatButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

FlatButton.defaultProps = {
    className: null
}

export default FlatButton;