import React from 'react';
import store from './Store';

//import { activeUsersId } from './Reducers/activeUsersId';
const Chats = ({ user }) => {
	const state = store.getState();
	console.log(state);
	const messages = state.messages[user];
	console.log(messages);
	return <div className="Chats" />;
};

export default Chats;
