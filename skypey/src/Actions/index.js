import { SET_ACTIVE_USER_ID } from '../Constants/action-types';
import { SET_TYPING_VALUE } from '../Constants/action-types';

export const setActiveUserId = (id) => {
	return {
		type: SET_ACTIVE_USER_ID,
		payload: id
	};
};
export const setTypingValue = (value) => {
	return {
		type: SET_TYPING_VALUE,
		payload: value
	};
};
