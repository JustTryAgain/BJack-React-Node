import React from 'react';
import {connect} from "react-redux";
import {hitAction, standAction} from "../../redux/game/actions.js";
import {createStructuredSelector} from "reselect";
import {getToken, winners} from "../../redux/selectors";

const ActionButtons = ({hitAction, standAction, getToken, winners}) => {
    return (
        <div className='action-buttons'>
            <div className='hit'>
                <button className='btn-hit' disabled={!!winners} onClick={() => hitAction(getToken)}>HIT!</button>
            </div>
            <div className='stand'>
                <button className='btn-stand' disabled={!!winners} onClick={() => standAction(getToken)}>STAND</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    hitAction,
    standAction
};
const mapStateToProps = createStructuredSelector({
    getToken,
    winners
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);