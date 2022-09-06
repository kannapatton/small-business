import {connect} from "react-redux";
import AddListings from "../components/AddListings";
import { addListings } from "../redux/actions";


const mapStateToProps = (state) => {
    return {
       listings: state.listings,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addListings: (listings) => dispatch(addListings(listings)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListings);



