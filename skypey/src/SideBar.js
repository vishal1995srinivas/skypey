import React from 'react';
import './SideBar.css';
import User from './User';
const SideBar = ({ contacts }) => {
	return <aside>{contacts.map((contact) => <User user={contact} key={contact.user_id} />)}</aside>;
};

export default SideBar;
