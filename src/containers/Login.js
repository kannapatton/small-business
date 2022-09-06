import { connect } from "react-redux";
import Login from "../components/Login";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    listings: state.listings,
  };
};

export default connect(mapStateToProps)(Login);