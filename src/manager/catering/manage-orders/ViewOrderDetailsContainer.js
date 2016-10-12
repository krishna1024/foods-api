import {connect} from 'react-redux'
import ManageOrders from './ManageOrders.js'

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};


const ManageOrdersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageOrders);

export default ManageOrdersContainer;
