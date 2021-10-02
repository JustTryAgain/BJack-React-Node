import React, {useMemo} from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getToken, winners} from "../../redux/selectors";
import {newGameAction} from "../../redux/game/actions";

const Winner = ({winners, getToken, newGameAction}) => {
    const showWinners = useMemo(() => {
        if (winners === null) return 'null';
        if (winners.length === 0) {
            return 'No-winners :(';
        }

        return 'winners: ' + winners.join(', ');
    }, [winners]);

    return (
        <div className='game-end' style={{display: winners !== null ? 'flex' : 'none'}}>
            <div className='winner'>
                <div className='winner-content'>{showWinners}</div>
            </div>
            <div className='save'>
                <button className='btn-reset' onClick={() => {
                    newGameAction(getToken);
                }}>Start new game
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    winners,
    getToken
});
const mapDispatchToProps = {
    newGameAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Winner);