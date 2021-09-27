import React from 'react';
import {connect} from "react-redux";
import {hitAction} from "../../redux/game/actions.js";
import {players} from "../../redux/selectors.js";


const ActionButtons = ({hitAction}) => {
    return (
        <div className = 'action-buttons'>
            <div className = 'hit'>
                <button className='btn-hit' onClick={()=>{hitAction();}}>HIT!</button>
            </div>
            <div className = 'stand'>
                <button className='btn-stand'>STAND</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
  return {
    playerArr: players(state)
  }
}

const mapDispatchToProps = {
  hitAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);