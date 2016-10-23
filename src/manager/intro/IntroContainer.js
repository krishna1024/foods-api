import {connect} from 'react-redux'
import Intro from './Intro.js'
import { loadCateringMenu } from '../catering/actions.js';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadManageMenu(){
      dispatch(loadCateringMenu);
    }
  };
};

const IntroContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);

export default IntroContainer;
