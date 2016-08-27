function foodsAppReducer(state,action) {
  if( action.do === 'load' )
  return {
    state: 'app-loaded'
  };
  if( action.type === 'foods-list') {
    const nextState = Object.assign({},state,{
      foodsList: action
    })
    return nextState;
  },
  if( action.type === 'add-food' ) {
      const nextState = Object.assign( { } , state , {
          page: action
      })
  }

};

export { foodsAppReducer };
