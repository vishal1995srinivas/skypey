import React from 'react';
import User from '../Containers/User';
import './SideBar.css';
const SideBar = ({ contacts }) => {
	return (
		<aside className="sidebar">{contacts.map((contact) => <User user={contact} key={contact.user_id} />)}</aside>
	);
};
export default SideBar;
