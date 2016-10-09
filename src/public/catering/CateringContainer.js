import {connect} from 'react-redux'
import Catering from './Catering.js'

const mapStateToProps = (state, ownProps) => {
    let location = state.routing.locationBeforeTransitions;
    let pathName = location ? location.pathname : '';
    return {
        currentState: getCurrentStage(pathName)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    };
};


const CateringContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Catering);

const pathStateMap = {
    '/catering/select': 'select',
    '/catering/customize': 'customize',
    '/catering/order': 'order',
    '/catering/checkout': 'checkout'
};

function getCurrentStage(path) {
    console.log("Path " + path );
    return pathStateMap[path];
}

export default CateringContainer;
