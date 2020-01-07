import { connect } from "react-redux";
import { insert } from '../../../reducers'
import InsertButton from "./InsertButton";

const mapDispatchToProps = () => dispatch => ({
    insertNode: (value) => {dispatch(insert(value))}
});

export default connect(null, mapDispatchToProps)(InsertButton);