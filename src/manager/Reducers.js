import caterigReducers from './catering/reducers.js';
const reducers = {
    loadManager: function (state = {},action) {
        return state;
    },
    loadGoodManager: function (state = {},action) {
        return state;
    }
};
const managerReducers = Object({},caterigReducers,reducers);
export default managerReducers
