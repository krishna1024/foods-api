import {connect} from 'react-redux'
import Manager from './Manager.js'

const mapStateToProps = (state, ownProps) => {
    return {

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    };
};


const ManagerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Manager);

export default ManagerContainer;
