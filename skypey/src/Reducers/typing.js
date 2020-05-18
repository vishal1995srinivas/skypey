import { SET_TYPING_VALUE } from '../Constants/action-types';

export const typing = (state = '', action) => {
	switch (action.type) {
		case SET_TYPING_VALUE:
			return action.payload;
		default:
			return state;
	}
};
