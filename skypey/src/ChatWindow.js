import React from 'react';
import activeUserId from './Reducers/activeUsersId';

const ChatWindow = () => {
	return <div className="ChatWindow"> Converstion for user id : {activeUserId}</div>;
};

export default ChatWindow;
