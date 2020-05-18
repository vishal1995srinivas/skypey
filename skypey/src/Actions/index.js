import { SET_ACTIVE_USER_ID } from '../Constants/action-types';

export const setActiveUserId = (id) => {
	return {
		type: SET_ACTIVE_USER_ID,
		payload: id
	};
};
