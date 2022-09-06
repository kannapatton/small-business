import {connect} from "react-redux";
import AdminView  from "../components/AdminView";

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
    };
};
export default connect(mapStateToProps)(AdminView);