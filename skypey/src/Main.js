import React from 'react';
import './Main.css';
import store from './Store';
import Empty from './Empty';
import ChatWindow from './ChatWindow';

console.log(store.getState());
const Main = ({ user }) => {
	let activeUsersId = store.getState().activeUsersId;
	//console.log(activeUsersId);
	const renderMainContent = () => {
		if (!activeUsersId) {
			return <Empty user={user} activeUsersId={activeUsersId} />;
		} else {
			return <ChatWindow activeUsersId={activeUsersId} />;
		}
	};
	return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
