import Menus from '../../api/Menus.js';
import { push } from 'react-router-redux';
function loadingCateringMenu(){
  return {
    type:'cateringMenus',
    status: 'loading',
    data: null
  }
}

function loadedCateringMenu(data){
  return {
    type:'cateringMenus',
    status: 'loaded',
    data: data
  }
}

function loadCateringMenu(dispatch){
  dispatch(loadingCateringMenu());
    let menus = new Menus();
    menus.all()
      .then( data => {
        dispatch(loadedCateringMenu(data));
        console.log('Data success');
        dispatch(push('/manager/catering/menus'));
      });
}

export { loadCateringMenu }
