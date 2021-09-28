import React from 'react';
import {connect} from "react-redux";
import {hitActionRequest} from "../../redux/game/actions.js";

const ActionButtons = ({hitActionRequest}) => {
    return (
        <div className = 'action-buttons'>
            <div className = 'hit'>
                <button className='btn-hit' onClick={()=>{hitActionRequest();}}>HIT!</button>
            </div>
            <div className = 'stand'>
                <button className='btn-stand'>STAND</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
  hitActionRequest: hitActionRequest
};

export default connect((state)=>state, mapDispatchToProps)(ActionButtons);