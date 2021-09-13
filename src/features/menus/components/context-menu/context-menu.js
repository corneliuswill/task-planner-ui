import React from 'react';

import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

import { useContextMenu } from './useContextMenu';

function ContextMenu({ color, children, showMenu }) {
    let { xPos, yPos, isVisible } = useContextMenu();

    if (showMenu) isVisible = showMenu;

    const renderContextMenu = (interpolatedStyle) => {
        return (
            <div
                className="context-menu-wrapper"
                style={{
                    backgroundColor: color,
                    border: '1px solid #999',
                    borderRadius: '8px',
                    color: '#FFF',
                    position: 'absolute',
                    top: yPos,
                    left: xPos,
                    opacity: interpolatedStyle.opacity,
                    minWidth: '300px',
                    padding: '8px 4px',
                    zIndex: 9999,
                }}
            >
                <div className="context-menu-body">
                    <ul
                        className="context-menu-list"
                        style={{
                            listStyleType: 'none',
                            padding: 0,
                            margin: 0
                        }}
                    >
                        {
                            React.Children.map(children, (child, index) => (<li key={index}>{child}</li>))
                            /*children.map((child, index) => (<li key={index}>{child}</li>))*/
                        }
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <Motion
            defaultStyle={{ opacity: 0 }}
            style={{ opacity: !isVisible ? spring(0) : spring(1) }}
        >
            { isVisible ? (interpolatedStyle) => renderContextMenu(interpolatedStyle) : () => <></>}
        </Motion>
    )
}

ContextMenu.propTypes = {
    children: PropTypes.any,
    color: PropTypes.string,
    opacity: PropTypes.string,
    showMenu: PropTypes.bool
}

ContextMenu.defaultProps = {
    // TODO: define default props for context menu
}

export default ContextMenu;
