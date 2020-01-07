import { connect } from "react-redux";
import { search } from '../../../reducers'
import SearchButton from "./SearchButton";

const mapDispatchToProps = () => dispatch => ({
    searchNode: (speed, root, value) => {dispatch(search(speed, root, value))}
});

export default connect(null, mapDispatchToProps)(SearchButton);