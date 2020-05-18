import { SET_ACTIVE_USER_ID } from '../Constants/action-types';

export const activeUsersId = (state = null, action) => {
	switch (action.type) {
		case SET_ACTIVE_USER_ID:
			return action.payload;
		default:
			return state;
	}
};
