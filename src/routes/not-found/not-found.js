import React from 'react';
import PropTypes from 'prop-types';

import ThinkingEmoji from '../../assets/images/thinking-emoji.png';
function NotFound() {
    return (
        <div className='container not-found'>
            <div>
                <img src={ThinkingEmoji} alt='Thinking Emoji'/>
            </div>
            <div>
            OOPS!
            </div>

            <div>
            Something went wrong.
            </div>

            <div className="action-items">
                <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block active"
                    //onClick={() => props.history.push('/')}
                >
                    Return to Home
                </button>
            </div>
        </div>
    )
}

NotFound.propTypes = {
    history: PropTypes.object
}

export default NotFound;
