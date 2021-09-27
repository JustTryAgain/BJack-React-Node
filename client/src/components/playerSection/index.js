import {connect} from "react-redux";
import PlayersList from "./playerList.jsx";


const mapStateToProps = (state) => {
  return {...state};
}

export default connect(mapStateToProps)(PlayersList);