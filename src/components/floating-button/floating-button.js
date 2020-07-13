import React from "react"
import PropTypes from 'prop-types'

import './floating-button.css'

export default function FloatingButton(props) {
  const { width, height, backgroundColor, color, hiddenText, children, handleAddTodo } = props

  return (
    <button
      type="button"
      className="fb"
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: color
      }}
      onClick={handleAddTodo}
    >
      <span className="fb-image-container">
        {children}
      </span>
      <span className="fb-text-container fb-context-text-hidden">
      <span className="fb-text">{hiddenText}</span>
      </span>
    </button>
  );
}

FloatingButton.propTypes = {
    children: PropTypes.element,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    hiddenText: PropTypes.string,
}

FloatingButton.defaultProps = {
    width: '60px',
    height: '60px',
    color: '#FFF',
    backgroundColor: '#333',
    hiddenText: '',
}
