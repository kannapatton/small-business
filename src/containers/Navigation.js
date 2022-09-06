import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    listings: state.listings,
  };
};

export default connect(mapStateToProps)(Navigation);