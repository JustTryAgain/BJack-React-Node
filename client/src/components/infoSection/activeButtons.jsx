import React from 'react';

const ActionButtons = () => {
    return (
        <div className = 'action-buttons'>
            <div className = 'hit'>
                <button className='btn-hit'>HIT!</button>
            </div>
            <div className = 'stand'>
                <button className='btn-stand'>STAND</button>
            </div>
        </div>
    );
}

export default ActionButtons;