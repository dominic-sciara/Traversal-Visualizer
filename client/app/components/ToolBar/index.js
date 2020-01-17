import { connect } from "react-redux";
import { pre_order, in_order, post_order, reset, breadth_first, random_generate } from '../../reducers'
import ToolBar from './ToolBar'

const mapStateToProps = state => ({
    lock_status: state.toolbar_lock
});

const mapDispatchToProps = () => dispatch => ({
    breadthFirst: (speed, root) => {dispatch(breadth_first(speed, root))},
    preOrder: (speed, root) => {dispatch(pre_order(speed, root))},
    inOrder: (speed, root) => {dispatch(in_order(speed, root))},
    postOrder: (speed, root) => {dispatch(post_order(speed, root))},
    generate: () => {dispatch(random_generate())},
    reset: () => {dispatch(reset())}
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);