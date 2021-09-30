import {connect} from "react-redux";
import PlayersList from "./playerList.jsx";
import {createStructuredSelector} from "reselect";
import {currentPlayer, players} from "../../redux/selectors";


const mapStateToProps = createStructuredSelector({
  players,
  currentPlayer
});

export default connect(mapStateToProps)(PlayersList);