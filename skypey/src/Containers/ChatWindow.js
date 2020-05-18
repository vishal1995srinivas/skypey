import React from 'react';
import store from '../Store';
import Header from '../components/Header';
import Chats from '../components/Chats';
import _ from 'lodash';
import MessageInput from './MessageInput';
import './ChatWindow.css';
//import { activeUsersId } from './Reducers/activeUsersId';
const ChatWindow = ({ activeUsersId }) => {
	const state = store.getState();
	//console.log(state);
	const activeUser = state.contact[activeUsersId];
	const messages = state.messages[activeUsersId];
	const { typing } = state;
	return (
		<div className="ChatWindow">
			<Header user={activeUser} />
			<Chats messages={_.values(messages)} />
			<MessageInput value={typing} />
		</div>
	);
};

export default ChatWindow;
