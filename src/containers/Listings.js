import {connect} from "react-redux";
import Listings from "../components/Listings";
import { removeListings } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        user:state.user,
        listings:state.listings,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness:(index) => dispatch(removeListings(index)),
    };

};
export default connect (mapStateToProps, mapDispatchToProps)(Listings);