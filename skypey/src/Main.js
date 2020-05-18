import React from 'react';
import './Main.css';
import store from './Store';
import Empty from './Empty';

const Main = ({ user, activeUsersId }) => {
	//console.log(store.getState());
	const renderMainContent = () => {
		if (!activeUsersId) {
			return <Empty user={user} activeUserId={activeUsersId} />;
		} else {
			return <ChatWindow activeUsersId={activeUsersId} />;
		}
	};
	return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
