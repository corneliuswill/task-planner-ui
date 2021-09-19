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

function FlatButton(props) {
    let { onClick } = props;

    return (
        <Button onClick={onClick}>
            {props.children}
        </Button>
    );
}

FlatButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any
}

export default FlatButton;