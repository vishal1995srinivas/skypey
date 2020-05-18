import { generateUser } from '../static-data';

const User = (state = generateUser(), action) => {
	return state;
};
export default User;
