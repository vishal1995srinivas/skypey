import User from './User';
import contact from './contacts';
import { activeUsersId } from './activeUsersId';
import { combineReducers } from 'redux';
import messages from './messages';

export default combineReducers({
	User,
	contact,
	activeUsersId,
	messages
});
