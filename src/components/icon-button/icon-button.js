import React from "react"
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import './icon-button.css'

export default function IconButton(props) {
  const { width, height, backgroundColor, color, hiddenText, onClick } = props

  return (
    <a
      href='/#'
      className="icon-button"
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
      }}
      onClick={onClick}
    >
      <span className="icon-button-image-container">
        <FontAwesomeIcon icon={faArrowLeft} color={color} />
      </span>
      <span className="fb-text-container fb-context-text-hidden">
        <span className="icon-button-text">{hiddenText}</span>
      </span>
    </a>
  )
}

IconButton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    hiddenText: PropTypes.string
}

IconButton.defaultProps = {
    width: '44px',
    height: '44px',
    color: '#FFF',
    backgroundColor: '',
    hiddenText: ''
}
