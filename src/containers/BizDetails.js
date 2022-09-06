import {connect} from "react-redux";
import BizDetails from "../components/BizDetails";

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
    };
};
export default connect(mapStateToProps)(BizDetails);