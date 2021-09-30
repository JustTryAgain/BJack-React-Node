import React from 'react';
import {connect} from "react-redux";
import {hitAction, standAction} from "../../redux/game/actions.js";
import {createStructuredSelector} from "reselect";
import {getToken} from "../../redux/selectors";

const ActionButtons = ({hitAction, standAction, getToken}) => {
    return (
        <div className='action-buttons'>
            <div className='hit'>
                <button className='btn-hit' onClick={() => hitAction(getToken)}>HIT!</button>
            </div>
            <div className='stand'>
                <button className='btn-stand' onClick={() => standAction(getToken)}>STAND</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    hitAction,
    standAction
};
const mapStateToProps = createStructuredSelector({
    getToken
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);