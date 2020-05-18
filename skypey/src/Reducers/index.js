import User from './User';
import contact from './contacts';
import activeUsersId from './activeUsersId';
import { combineReducers } from 'redux';

export default combineReducers({
	User,
	contact,
	activeUsersId
});
