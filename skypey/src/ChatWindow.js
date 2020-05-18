import React from 'react';
import store from './Store';
import Header from './Header';
import Chats from './Chats';
import _ from 'lodash';
import MessageInput from './MessageInput';
//import { activeUsersId } from './Reducers/activeUsersId';
const ChatWindow = ({ activeUsersId }) => {
	const state = store.getState();
	//console.log(state);
	const activeUser = state.contact[activeUsersId];
	const messages = state.messages[activeUsersId];
	return (
		<div className="ChatWindow">
			<Header user={activeUser} />
			<Chats messages={_.values(messages)} />
			<MessageInput />
		</div>
	);
};

export default ChatWindow;
