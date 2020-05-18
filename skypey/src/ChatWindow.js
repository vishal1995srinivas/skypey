import React from 'react';
import store from './Store';
import Header from './Header';
//import { activeUsersId } from './Reducers/activeUsersId';
const ChatWindow = ({ activeUsersId }) => {
	const state = store.getState();
	//console.log(state);
	const activeUser = state.contact[activeUsersId];
	return (
		<div className="ChatWindow">
			<Header user={activeUser} />
		</div>
	);
};

export default ChatWindow;
