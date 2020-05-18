import User from './User';
import contact from './contacts';
import { activeUsersId } from './activeUsersId';
import { combineReducers } from 'redux';
import messages from './messages';
import { typing } from './typing';

export default combineReducers({
	User,
	contact,
	activeUsersId,
	messages,
	typing
});
