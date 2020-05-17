import { createStore } from 'redux';
import rootReducer from '../Reducers';
//import { contacts } from '../static-data';
//import { reducer } from '../Reducers';
const store = createStore(rootReducer);
export default store;
